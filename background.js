chrome.pageAction.onClicked.addListener(function (tab) {
      chrome.tabs.executeScript(null,{file:"popup.js"});
});
