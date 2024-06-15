let nextProductId = 6;

function addNewProduct() {
    let newRow = `
        <tr>
            <td>${nextProductId}</td>
            <td>New Product</td>
            <td>0</td>
            <td>0</td>
            <td>
                <button class="edit-button" onclick="editProduct(${nextProductId})">修改</button>
                <button class="delete-button" onclick="deleteProduct(${nextProductId})">刪除</button>
            </td>
        </tr>
    `;
    document.getElementById('productTable').insertAdjacentHTML('beforeend', newRow);
    nextProductId++;
}

function editProduct(productId) {
    
    let productName = document.getElementById('productTable').rows[productId].cells[1].innerText;
    let productPrice = document.getElementById('productTable').rows[productId].cells[2].innerText;
    let productStock = document.getElementById('productTable').rows[productId].cells[3].innerText;

    document.getElementById('editProductId').value = productId;
    document.getElementById('editProductName').value = productName;
    document.getElementById('editProductPrice').value = productPrice;
    document.getElementById('editProductStock').value = productStock;

    document.getElementById('editForm').style.display = 'block';
}

function saveProduct() {
    
    let productId = document.getElementById('editProductId').value;
    let newName = document.getElementById('editProductName').value;
    let newPrice = document.getElementById('editProductPrice').value;
    let newStock = document.getElementById('editProductStock').value;

    
    document.getElementById('productTable').rows[productId].cells[1].innerText = newName;
    document.getElementById('productTable').rows[productId].cells[2].innerText = newPrice;
    document.getElementById('productTable').rows[productId].cells[3].innerText = newStock;

    
    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    
    document.getElementById('editForm').style.display = 'none';
}

function deleteProduct(productId) {
    
    if (confirm("確定要刪除這個商品嗎？")) {
        document.getElementById('productTable').deleteRow(productId);
    }
}