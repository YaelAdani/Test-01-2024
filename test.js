
let products = [];

document.getElementById("addProductButton").addEventListener("click", function() {
    // this needs to be declared outside
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;
    let productImage = document.getElementById("productImage").value;
    
    if (productName && productPrice && productCategory && productImage) {
        let product = {
            productName: productName,
            productPrice: productPrice,
            productCategory: productCategory,
            productImage: productImage
        };

        products.push(product);

        displayObjectsInTable(products);
    } else {
        alert('This field is required.');
    }
    // this should ne extract to a function 
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productImage").value = "";
});

function displayObjectsInTable(products) {
    // do you really need the table
    let table = document.getElementById('cartTable');
    // needs to be outside.
    let tbody = table.getElementsByTagName('tbody')[0];
    // this function needs to be seprate to more functions.
    for (let i = 0; i < products.length; i++) {
        // this needs to good names (like nameCell)
        let row = tbody.insertRow(tbody.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = products[i].productName;
        cell2.innerHTML = products[i].productPrice;
        cell3.innerHTML = products[i].productCategory;

        let img = document.createElement("img");
        img.src = products[i].productImage;
        img.alt = products[i].productName;
        // good!
        img.width = 100;
        img.height = 100;
        cell4.appendChild(img);
        
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.addEventListener("click", function() {
            deleteProduct(i);
        });
        cell5.appendChild(deleteButton);
    }
}

function deleteProduct(index) {
    // did you check this is working?
    let table = document.getElementById('cartTable');
    table.deleteRow(index + 1);
}
