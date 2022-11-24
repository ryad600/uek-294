
var request;

function onLoginButtonPressed(event) {
    var data = {
        username: loginName.value,
        password: loginPassword.value
    };
    request = new XMLHttpRequest();
    request.open("POST", "../API/V1/Login");
    request.onreadystatechange = onRequestUpdate;
    request.send(JSON.stringify(data));
}

//hello
function onRequestUpdate(event) {
    if (request.readyState < 4) {
        return;
    }
    var responseData = request.responseText;
    if (responseData == true) {
        alert("Login successful.")
    }
    else {
        alert("Login failed.")
    }
}

var loginButton = document.getElementById("login-button");
var loginName = document.getElementById("login-name");
var loginPassword = document.getElementById("login-password");

loginButton.addEventListener("click", onLoginButtonPressed);