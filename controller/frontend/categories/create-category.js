var request;
var postCategory;
var textFields = [];

function onSubmitButtonPressed(event) {
    event.preventDefault();
    var data = {
        active: categoryActive.checked,
        name: categoryName.value

    };
    postCategory = new XMLHttpRequest();
    postCategory.open("POST", "../API/V1/Category");
    postCategory.onreadystatechange = submitcategory;
    postCategory.send(JSON.stringify(data));
}

function submitcategory(event) {
    if (postCategory.readyState < 4) {
        return;
    }
    var createResponseData = JSON.parse(postCategory.responseText);
    if (createResponseData == true) {
        alert("category " + categoryName.value + " was succesfully created")
    }
    window.location = "../category/index.html";
}

var categoryActive = document.getElementById("category-active");
var categoryName = document.getElementById("category-name");

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", onSubmitButtonPressed)
