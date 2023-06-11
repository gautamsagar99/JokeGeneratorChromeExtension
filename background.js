chrome.browserAction.onClicked.addListener(function () {
  chrome.windows.create({
    type: "popup",
    width: 400,
    height: 500,
    url: "display.html",
  });
});
