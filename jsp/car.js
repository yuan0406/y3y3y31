//1.商品數量加減
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.num_control').forEach(function(control) {
      let reduce = control.querySelector('.reduce');
      let add = control.querySelector('.add');
      let buyNum = control.querySelector('.buy_num');
      
      add.addEventListener('click', function() {
          buyNum.value = parseInt(buyNum.value) + 1; // 將數量增加並轉為整數
          if (buyNum.value > 1) {
              reduce.classList.remove('disabled'); // 如果數量大於 1，移除禁用類
          }
          updateTotal(control); // 更新總價
      });
      
      reduce.addEventListener('click', function() {
          if (buyNum.value > 1) {
              buyNum.value = parseInt(buyNum.value) - 1; // 將數量減少並轉為整數
              if (buyNum.value <= 1) {
                  reduce.classList.add('disabled'); // 如果數量小於或等於 1，添加禁用類
              }
              updateTotal(control); // 更新總價
          }
      });
  });
});

// 添加 updateTotal 函數來更新每個商品的總價
function updateTotal(control) {
  let price = parseInt(control.parentElement.querySelector('.price').innerText.replace('$', '')); // 獲取單價並轉為整數
  let quantity = parseInt(control.querySelector('.buy_num').value); // 獲取數量並轉為整數
  let total = control.parentElement.querySelector('.total span'); // 獲取總價元素
  total.innerText = '$' + (price * quantity); // 更新總價
}

//2.刪除
let _del = document.querySelectorAll('.del');
[..._del].forEach(_del => {
    _del.onclick = function() {
        let item = _del.closest('.shop'); // 找到包含當前商品的整個容器
        item.remove(); // 刪除整個容器
        sumTotal(); // 更新總價
    }
});


// 3.全選商店的所有商品
let _shop_checkboxes = document.querySelectorAll('.shop_checkbox');

_shop_checkboxes.forEach(_shop_checkbox => {
    _shop_checkbox.onclick = function() {
        let parentShop = _shop_checkbox.closest('.shop'); 
        let item_checkboxes = parentShop.querySelectorAll('.item_checkbox'); 
        item_checkboxes.forEach(_check => {
            _check.checked = _shop_checkbox.checked; 
        });
        sumTotal();
    }
});

//4.計算總金額

function updateTotal(control) {
    let price = parseInt(control.parentElement.querySelector('.price').innerText.replace('$', '')); // 獲取單價並轉為整數
    let quantity = parseInt(control.querySelector('.buy_num').value); // 獲取數量並轉為整數
    let total = control.parentElement.querySelector('.total span'); // 獲取總價元素
    total.innerText = '$' + (price * quantity); // 更新總價
    sumTotal(); // 更新總金額
}

let _sumTotal = document.querySelector('.sumTotal');
let itemCheckboxes = document.querySelectorAll('.item_checkbox'); // 選擇所有商品的勾選方塊

itemCheckboxes.forEach(itemCheckbox => {
    itemCheckbox.addEventListener('change', function() {
        sumTotal(); // 當任何商品的勾選狀態改變時，重新計算總金額
    });
});

function sumTotal() {
    let _checkedItemCheckboxes = document.querySelectorAll('.item_checkbox:checked'); // 選擇所有被勾選的 item_checkbox
    let total = 0;

    _checkedItemCheckboxes.forEach(_checkedItemCheckbox => {
        let item = _checkedItemCheckbox.closest('.item'); // 找到包含當前 checkbox 的整個商品行
        let price = parseInt(item.querySelector('.price').innerText.replace('$', '').replace(',', '')); // 獲取商品價格並轉換為整數，移除逗號
        let quantity = parseInt(item.querySelector('.buy_num').value); // 獲取商品數量並轉換為整數
        total += price * quantity; // 計算商品總價
    });

    _sumTotal.innerText = total; // 更新總計顯示
}

sumTotal(); // 初始計算一次

//5.全選
document.querySelector('.all').addEventListener('change', function() {
    const allChecked = this.checked;
    document.querySelectorAll('.shop_checkbox, .item_checkbox').forEach(checkbox => {
        checkbox.checked = allChecked;
    });
    sumTotal();
});

// 每個店鋪的全選功能
document.querySelectorAll('.shop_checkbox').forEach(shopCheckbox => {
    shopCheckbox.addEventListener('change', function() {
        const items = this.closest('.shop').querySelectorAll('.item_checkbox');
        items.forEach(itemCheckbox => {
            itemCheckbox.checked = this.checked;
        });
        sumTotal();
    });
});

//6.關閉視窗
function closeWindow() {
    window.close(); // This will close the current window/tab
}









