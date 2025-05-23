chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openSidePanel') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs.length > 0) {
                chrome.sidePanel.open({
                    tabId: tabs[0].id
                });
            }
        });
    }
});

// Handle extension icon clicks
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length > 0) {
            chrome.sidePanel.open({
                tabId: tabs[0].id
            });
        }
    });
});
