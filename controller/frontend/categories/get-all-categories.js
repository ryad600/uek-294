
function onRequestUpdate(event) {
    if (exampleRequest.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(exampleRequest.responseText);
}

exampleRequest = new XMLHttpRequest();
exampleRequest.open("GET", "../API/V1/public/controller/categories/get_all_categories.php");
exampleRequest.onreadystatechange = onRequestUpdate;
exampleRequest.send(JSON.stringify());

function onRequestUpdate(event) {
    if (exampleRequest.readyState < 4) {
        return;
    }
    var responseData = JSON.parse(exampleRequest.responseText);
}
var categoryTable = document.getElementById("category-table");

for (i = 0; i < exampleRequest.length; i++) {
    var tableRow = document.createElement("tr");
    var categoryID = document.createElement("td");
    var categoryName = document.createElement("td");
    var categoryActive = document.createElement("td");
    var categorysettings = document.createElement("td");
    
    categoryID.innerText = exampleRequest[i].id;
    categoryName.innerText = exampleRequest[i].Name;
    categoryActive.innerText = exampleRequest[i].Active;
    categorysettings.innerText = "lorem ipsum";

    tableRow.appendChild(categoryID);
    tableRow.appendChild(categoryName);
    tableRow.appendChild(categoryActive);
    tableRow.appendChild(categorysettings);
}