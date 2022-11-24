var request;
var tableRows = [];

function onOpenPage(event) {
    request = new XMLHttpRequest();
    request.open("GET", "../API/V1/Products");
    request.onreadystatechange = onRequestUpdate;
    request.send(JSON.stringify());
}

function onDeleteProduct(event) {
    
    if (confirm("Do you really want to delete this Product with the id: " + event.currentTarget.getAttribute("product-id"))) {
        requestDelete = new XMLHttpRequest();
        requestDelete.open("DELETE", "../API/V1/Product/" + event.currentTarget.getAttribute("product-id"));
        requestDelete.onreadystatechange = onDeleteUpdate;
        requestDelete.send();
    }

}

function onDeleteUpdate(event) {
    if (requestDelete.readyState < 4) {
        return;
    }
    if (JSON.parse(requestDelete.responseText == "true")) {
        for (var i = 0; i < tableRows.length; i++) {
            productTable.removeChild(tableRows[i]);
        
    }
    onOpenPage();
    alert("deleted");
    }
    else {
        alert("This Category has not been found, maybe it has already been deleted!");
    }
}

function onProductsEditButtonClicked(event) {

}

function onCreateNewProductButtonPressed(event) {
    window.location = "../products/create-product.html";
}

function onRequestUpdate(event) {
    if (request.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(request.responseText);

    for (var i = 0; i < responseData.length; i++) {
        var tableRow = document.createElement("tr");
        var productID = document.createElement("td");
        var sku = document.createElement("td");
        var active = document.createElement("td");
        var idCategory = document.createElement("td");
        var name = document.createElement("td");
        var description = document.createElement("td");
        var price = document.createElement("td");
        var stock = document.createElement("td");
        var productSettings = document.createElement("td"); 

        var editProductButton = document.createElement("button");
        editProductButton.addEventListener("click", onProductsEditButtonClicked);
        editProductButton.setAttribute("product-id", responseData[i].product_id);
        editProductButton.innerText = "🖉";
        editProductButton.style.fontSize = "16px"
        editProductButton.style.width = "30px"
        editProductButton.style.height = "30px"

        var deleteProductButton = document.createElement("button");
        deleteProductButton.addEventListener("click", onDeleteProduct);
        deleteProductButton.setAttribute("product-id", responseData[i].product_id);
        deleteProductButton.innerText = "🗑";
        deleteProductButton.style.fontSize = "16px"
        deleteProductButton.style.width = "30px"
        deleteProductButton.style.height = "30px"

        productID.innerText = responseData[i].product_id;
        sku.innerText = responseData[i].sku;
        active.innerText = responseData[i].active;
        idCategory.innerText = responseData[i].id_category;
        name.innerText = responseData[i].name;
        description.innerText = responseData[i].description;
        price.innerText = (responseData[i].price + " CHF");
        stock.innerText = responseData[i].stock;

        productSettings.appendChild(editProductButton);
        productSettings.appendChild(deleteProductButton);        
    
        tableRow.appendChild(productID);
        tableRow.appendChild(sku);
        tableRow.appendChild(active);
        tableRow.appendChild(idCategory);
        tableRow.appendChild(name);
        tableRow.appendChild(description);
        tableRow.appendChild(price);
        tableRow.appendChild(stock);
        tableRow.appendChild(productSettings);

        tableRows.push(tableRow);
        productTable.appendChild(tableRow);
    }
    var createNewProductButton = document.createElement("button");
    createNewProductButton.innerText = "Neues Produkt erstellen";
    createNewProductButton.style.width = "100%";
    createNewProductButton.addEventListener("click", onCreateNewProductButtonPressed);
    var createNewProductRow = document.createElement("tr");
    var createNewProductCell = document.createElement("td");
 
    createNewProductCell.appendChild(createNewProductButton);
    createNewProductRow.appendChild(createNewProductCell);
    productTable.appendChild(createNewProductRow);
    createNewProductCell.colSpan = "9";
    tableRows.push(createNewProductRow);
}

var productTable = document.getElementById("product-table");

window.addEventListener("load", onOpenPage);