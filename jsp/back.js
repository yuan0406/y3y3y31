let nextProductId = 6;
            
function addNewProduct() {
    let newRowId = `productRow${nextProductId}`;
    let newRow = `
        <tr id="${newRowId}">
            <td>${nextProductId}</td>
            <td>New Product</td>
            <td>0</td>
            <td>0</td>
            <td>
                <button class="edit-button" onclick="editProduct('${newRowId}')">修改</button>
                <button class="delete-button" onclick="deleteProduct('${newRowId}')">刪除</button>
            </td>
        </tr>
    `;
    document.getElementById('productTable').insertAdjacentHTML('beforeend', newRow);
    nextProductId++;
}

function editProduct(rowId) {
    let row = document.getElementById(rowId);
    let productId = row.cells[0].innerText;
    let productName = row.cells[1].innerText;
    let productPrice = row.cells[2].innerText;
    let productStock = row.cells[3].innerText;

    document.getElementById('editProductId').value = rowId;
    document.getElementById('editProductName').value = productName;
    document.getElementById('editProductPrice').value = productPrice;
    document.getElementById('editProductStock').value = productStock;

    document.getElementById('editForm').style.display = 'block';
}

function saveProduct() {
    let rowId = document.getElementById('editProductId').value;
    let newName = document.getElementById('editProductName').value;
    let newPrice = document.getElementById('editProductPrice').value;
    let newStock = document.getElementById('editProductStock').value;

    let row = document.getElementById(rowId);
    row.cells[1].innerText = newName;
    row.cells[2].innerText = newPrice;
    row.cells[3].innerText = newStock;

    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}

function deleteProduct(rowId) {
    if (confirm("確定要刪除這個商品嗎？")) {
        let row = document.getElementById(rowId);
        row.remove();
    }
}