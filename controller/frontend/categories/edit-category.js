var request;
var postcategory;
var textFields = [];
var id = location.hash.substring(1);

function onOpenPage(event) {
    request = new XMLHttpRequest();
    request.open("GET", "../API/V1/Category/" + id);
    request.onreadystatechange = onRequestUpdate;
    request.send();
}

function onRequestUpdate(event) {
    if (request.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(request.responseText)
    categoryActive.value = responseData.active;
    categoryName.value = responseData.name;
}

function onSubmitButtonPressed(event) {
    event.preventDefault();
    if (categoryIdCategory.value === "0") {
        categoryIdCategory.value = null;
    }
    var data = {
        active: categoryActive.checked,
        name: categoryName.value
    };
    postcategory = new XMLHttpRequest();
    postcategory.open("PUT", "../API/V1/Category/" + id);
    postcategory.onreadystatechange = submitcategory;
    postcategory.send(JSON.stringify(data));
}

function submitcategory(event) {
    if (postcategory.readyState < 4) {
        return;
    }
    var createResponseData = JSON.parse(postcategory.responseText);
    if (createResponseData == true) {
        alert("Category " + categoryName.value + " was succesfully changed");
    }
    window.location = "../categories/index.html";
}

var categoryActive = document.getElementById("category-active");
var categoryName = document.getElementById("category-name");
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", onSubmitButtonPressed);
window.addEventListener("load", onOpenPage);


