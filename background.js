// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

    console.log("Background JS is up.");

    chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
        chrome.tabs.executeScript(null, { file: "content.js" });
    });

    /*
    chrome.tabs.executeScript(tab.id, {
            file: "jquery-1.11.3.min.js"
    }, function() {
        chrome.tabs.executeScript(tab.id, {
                file: "content.js"
        }, function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        });
    });
    */

    /*
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
    */

});
