var exampleRequest;
var textFields = [];

function onAddFieldPressed(event) {
    textfields.push(document.createElement("input"));
    getElementById. textfields[(count(textfields) - 1)]
}



function onLoadButtonPressed(event) {
    var data = {
        numbers: [
            numberOne.value,
            numberTwo.value,
            numberThree.value,
            numberFour.value
        ]
    };

    exampleRequest = new XMLHttpRequest();
    exampleRequest.open("POST", "controller/backend/example.php");
    exampleRequest.onreadystatechange = onRequestUpdate;
    exampleRequest.send(JSON.stringify(data));
}

function onRequestUpdate(event) {
    if (exampleRequest.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(exampleRequest.responseText);
    resultView.innerText = responseData.result;

}

var loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", onLoadButtonPressed);

var addFieldButton = document.getElementById("add-field");
addFieldButton.addEventListener("click", onAddFieldPressed);

//var numberOne = document.getElementById("1");
//var numberTwo = document.getElementById("2");
//var numberThree = document.getElementById("3");
//var numberFour = document.getElementById("4");

var resultView = document.getElementById("result-view");

var searchString = window.location.search;

if (searchString) {
    searchString = searchString.substring(1)

    var allKeyValuesPairs = searchString.split("&");

    for (let i = 0; i < allKeyValuesPairs.length; i++) {
        var keyValuePair = allKeyValuesPairs[i];

        var keyValue = keyValuePair.split("=");
        
        if (keyValue.length == 2) {
            
        }
    }
}

