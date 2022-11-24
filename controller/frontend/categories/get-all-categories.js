var request;
var deleteButtons = [];
var editButtons = [];
var responseData;

function onOpenPage(event) {
    request = new XMLHttpRequest();
    request.open("GET", "../API/V1/Categories");
    request.onreadystatechange = onRequestUpdate;
    request.send(JSON.stringify());
}

function onCategoryDeleteButtonClicked(event) {
    
    if (confirm("Do you really want to delete the Category with the id: " + event.currentTarget.getAttribute("category-id"))) {
        request = new XMLHttpRequest();
        request.open("DELETE", "../API/V1/Product/" + event.currentTarget.getAttribute("category-id"));
        request.onreadystatechange = onRequestUpdate;
        request.send(JSON.stringify());

        alert("deleted");
    }
    else {
        alert("not deletet");
    }
}

function onCreateNewCategoryButtonClicked(event) {
    window.location = "../category/create-category.html";
}



function onDeleteConfirmClicked(event) {
    
}


function onCategoryEdit(event) {

}

function onRequestUpdate(event) {
    if (request.readyState < 4) {
        return;
    }
    responseData = JSON.parse(request.responseText);

    for (var i = 0; i < responseData.length; i++) {
        var tableRow = document.createElement("tr");
        var categoryID = document.createElement("td");
        var categoryName = document.createElement("td");
        var categoryActive = document.createElement("td");
        var categorySettings = document.createElement("td");
        
        var editCategoryButton = document.createElement("button");
        editCategoryButton.addEventListener("click", onCategoryEdit);
        editCategoryButton.setAttribute("category-id", responseData[i].category_id);
        editCategoryButton.innerText = "🖉";
        editCategoryButton.style.fontSize = "16px"
        editCategoryButton.style.width = "30px"
        editCategoryButton.style.height = "30px"
        editButtons.push(editCategoryButton);

        var deleteCategoryButton = document.createElement("button");
        deleteCategoryButton.addEventListener("click", onCategoryDeleteButtonClicked);
        deleteCategoryButton.setAttribute("category-id", responseData[i].category_id);
        deleteCategoryButton.innerText = "🗑";
        deleteCategoryButton.style.fontSize = "16px"
        deleteCategoryButton.style.width = "30px"
        deleteCategoryButton.style.height = "30px"
        deleteButtons.push(deleteCategoryButton);

        categoryID.innerText = responseData[i].category_id;
        categoryName.innerText = responseData[i].name;
        categoryActive.innerText = responseData[i].active;

        categorySettings.appendChild(editCategoryButton);
        categorySettings.appendChild(deleteCategoryButton);
        
        tableRow.appendChild(categoryID);
        tableRow.appendChild(categoryName);
        tableRow.appendChild(categoryActive);
        tableRow.appendChild(categorySettings);

        categoryTable.appendChild(tableRow);
    }
    var createNewCategoryButton = document.createElement("button");
    createNewCategoryButton.innerText = "Neue Kategorie erstellen";
    createNewCategoryButton.style.width = "100%";
    createNewCategoryButton.addEventListener("click", oncreateNewCategoryButtonClicked);
    var createNewCategoryRow = document.createElement("tr");
    var createNewCategoryCell = document.createElement("td");
 
    createNewCategoryCell.appendChild(createNewCategoryButton);
    createNewCategoryRow.appendChild(createNewCategoryCell);
    categoryTable.appendChild(createNewCategoryRow);
    createNewCategoryCell.colSpan = "9";
}
var categoryTable = document.getElementById("category-table");

window.addEventListener("load", onOpenPage);