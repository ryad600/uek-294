var request;
var postProduct;
var textFields = [];
var id = location.hash.substring(1);

function onOpenPage(event) {
    request = new XMLHttpRequest();
    request.open("GET", "../API/V1/Product/" + id);
    request.onreadystatechange = onRequestUpdate;
    request.send();
}

function onRequestUpdate(event) {
    if (request.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(request.responseText)
    productSku.value = responseData.sku;
    productActive.value = responseData.active;
    productIdCategory.value = responseData.id_category;
    productName.value = responseData.name;
    productImage.value = responseData.image;
    productDescription.value = responseData.description;
    productPrice.value = responseData.price;
    productStock.value = responseData.stock;
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
    postProduct.open("PUT", "../API/V1/Product/" + id);
    postProduct.onreadystatechange = submitProduct;
    postProduct.send(JSON.stringify(data));
}

function submitProduct(event) {
    if (postProduct.readyState < 4) {
        return;
    }
    var createResponseData = JSON.parse(postProduct.responseText);
    if (createResponseData == true) {
        alert("Product " + productName.value + " was succesfully changed");
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
submitButton.addEventListener("click", onSubmitButtonPressed);
window.addEventListener("load", onOpenPage);


