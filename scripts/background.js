console.log("Background script loaded!");
chrome.runtime.onInstalled.addListener(()=>{
    console.log("Extension installed!");
});
chrome.tabs.onUpdated.addListener((tabid, changeInfo, tab) => {
    if(changeInfo.status==="complete"){
        console.log("Loading complete for tab:",tab.url);
        chrome.scripting.executeScript({
            target: {tabId: tabid},
            function: Inlogin
        }).then((result)=>{
            console.log("Result:",result[0].result);
        });
        
    }
});

function Inlogin(){
    console.log("Inlogin Ran");
    const login= document.querySelectorAll('input[type="password"]');
    console.log("Password Fields Found here:",login.length);
    return login.length ;
}