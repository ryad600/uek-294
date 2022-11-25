var request;
var postProduct;
var textFields = [];

function onOpenPage(event) {
    request = new XMLHttpRequest();
    request.open("GET", "../API/V1/Categories");
    request.onreadystatechange = onRequestUpdate;
    request.send();
}

function onRequestUpdate(event) {
    if (request.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(request.responseText)
    for (let i = 0; i < responseData.length; i++) {
        var categoryOption = document.createElement("option");
        categoryOption.value = responseData[i].category_id; 
        categoryOption.innerText = responseData[i].name
        productIdCategory.appendChild(categoryOption);
    }
}

function onSubmitButtonPressed(event) {
    event.preventDefault();
    if (productIdCategory.value === "0") {
        productIdCategory.value = null;
    }
    var data = {
        sku: productSku.value,
        active: productActive.checked,
        id_category: productIdCategory.value,
        name: productName.value,
        image: productImage.value,
        description: productDescription.value,
        price: productPrice.value,
        stock: productStock.value
    };
    postProduct = new XMLHttpRequest();
    postProduct.open("POST", "../API/V1/Product");
    postProduct.onreadystatechange = submitProduct;
    postProduct.send(JSON.stringify(data));
}

function submitProduct(event) {
    if (request.readyState < 4) {
        return;
    }
    var createResponseData = JSON.parse(postProduct.responseText);
    if (createResponseData == "true") {
        alert("Product " + productName.value + "succesfully created")
    }
    window.location = "../products/index.html";
}

var productSku = document.getElementById("product-sku");
var productActive = document.getElementById("product-active");
var productIdCategory = document.getElementById("product-id-category");
var productName = document.getElementById("product-name");
var productImage = document.getElementById("product-image");
var productDescription = document.getElementById("product-description");
var productPrice = document.getElementById("product-price");
var productStock = document.getElementById("product-stock");
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", onSubmitButtonPressed)
window.addEventListener("load", onOpenPage);
