console.log("Background script loaded!");
chrome.runtime.onInstalled.addListener(()=>{
    console.log("Extension installed!");
});
chrome.tabs.onUpdated.addListener((tabid, changeInfo, tab) => {
    console.log("Tab updated:", tabid, changeInfo, tab);
});
