async function fetchJoke() {
  await fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      const jokeElement = document.getElementById("joke-text");
      if (data["setup"] !== undefined) {
        jokeElement.textContent = data.setup + " " + data.delivery;
      } else {
        jokeElement.textContent = "Try Again!";
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

function setupNewJokeButton() {
  const newJokeButton = document.getElementById("new-joke-button");
  newJokeButton.addEventListener("click", fetchJoke);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchJoke();
  setupNewJokeButton();
});
