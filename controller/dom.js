/*var pageHeader = document.getElementById("page-header");
console.log(pageHeader.innerText);
pageHeader.innerText = "hello";

var mainImage = document.getElementById("main-image");

var subtitle = document.createElement("h2");
subtitle.innerText = "helllllllo";
document.body.insertBefore(subtitle, mainImage);*/

var people = [
    {
        name: "Horst Henkelschwünkler",
        age: 56
    },
    {
        name: "Horst Wuppmann",
        age: 48
    }
];

if (people.length >= 1) {
    var peopleTable = document.createElement("table");
    peopleTable.style.border = "1px solid";
    peopleTable.style.borderCollapse = "collapse";
    peopleTable.style.fontFamily = "Arial";

    var tableRow = document.createElement("tr");

    var tableHeaderL = document.createElement("th");
    tableHeaderL.style.border = "1px solid";
    tableHeaderL.style.borderCollapse = "collapse";
    
    var tableHeaderR = document.createElement("th");
    tableHeaderR.style.border = "1px solid";
    tableHeaderR.style.borderCollapse = "collapse";

    tableHeaderL.innerText = "Name";
    tableHeaderR.innerText = "Age";

    tableRow.appendChild(tableHeaderL);
    tableRow.appendChild(tableHeaderR);
    peopleTable.appendChild(tableRow);

    for (i = 0; people.length > i; i++) {
        var tableRow = document.createElement("tr");
        var tableName = document.createElement("td");
        var tableAge = document.createElement("td");
        tableName.style.border = "1px solid";
        tableName.style.borderCollapse = "collapse";
        tableAge.style.border = "1px solid";
        tableAge.style.borderCollapse = "collapse";

        tableName.style.fontWeight = "bold";

        tableName.innerText = people[i].name;
        tableAge.innerText = people[i].age;
        tableRow.appendChild(tableName);
        tableRow.appendChild(tableAge);
        peopleTable.appendChild(tableRow);
    }   
    document.body.appendChild(peopleTable);
}

// 134 - 147 lesen!!!!!6