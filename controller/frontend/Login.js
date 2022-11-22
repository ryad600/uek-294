var request

function onRequestUpdate(event) {
    if (exampleRequest.readyState < 4) {
        return;
    }
    
}

function onLoginButtonPressed(event) {
    var data = {
        name: loginName,
        password: loginPassword
    };
    request = new XMLHttpRequest();
    request.open("POST", "../API/V1/public/controller/categories/get_all_categories.php");
    request.onreadystatechange = onRequestUpdate;
    request.send(JSON.stringify(data));
}



function onRequestUpdate(event) {
    if (exampleRequest.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(exampleRequest.responseText);
}


var loginButton = document.getElementById("login-button");
var loginName = document.getElementById("login-name");
var loginPassword = document.getElementById("login-password");
