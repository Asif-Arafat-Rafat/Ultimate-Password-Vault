console.log("Content script loaded!");

function IsLoginOrRegister() { 
    const loginOrReg = document.querySelectorAll('input[type="password"]');
    console.log("Password Fields Found here:", loginOrReg.length);
    return loginOrReg.length > 0;
}

if (IsLoginOrRegister()) {
    console.log("Login or Register page detected!");
} else {
    console.log("Not a login page.");
}
