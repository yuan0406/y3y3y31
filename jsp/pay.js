//隱藏購物車
document.getElementById("no1").addEventListener("click", function() {
    var hiddenTableContainer = document.getElementById("hiddenTableContainer");
    hiddenTableContainer.classList.toggle("show");
});

//監聽取貨方式
document.getElementById("shipping-method").addEventListener("change", function() {
    var addressInfo = document.getElementById("address-info");
    var storeInfo = document.getElementById("store-info");
    
    if (this.value === "home") {
        addressInfo.style.display = "block";
        storeInfo.style.display = "none";
    } else if (this.value === "convenience-store") {
        storeInfo.style.display = "block";
        addressInfo.style.display = "none";
    } else {
        addressInfo.style.display = "none";
        storeInfo.style.display = "none";
    }
});

// 編輯地址
document.querySelectorAll('.add-edit-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('addressModal').style.display = 'block';
    });
});

// 編輯超商
document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('storeModal').style.display = 'block';
    });
});

// 關掉編輯地址和超商
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        document.getElementById('addressModal').style.display = 'none';
        document.getElementById('storeModal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    var addressModal = document.getElementById('addressModal');
    var storeModal = document.getElementById('storeModal');
    if (event.target == addressModal) {
        addressModal.style.display = 'none';
    }
    if (event.target == storeModal) {
        storeModal.style.display = 'none';
    }
});

document.getElementById('confirmStore').addEventListener('click', function() {
    var storeName = document.getElementById('store').value;
    var storeAddress = document.getElementById('shop').value;

    if (storeName && storeAddress) {
        document.getElementById('store-name').textContent = '超商名稱: ' + storeName;
        document.getElementById('store-address').textContent = '超商門市: ' + storeAddress;
        document.getElementById('storeModal').style.display = 'none';
    } else {
        alert('請選擇商店名稱並填寫門市地址');
    }
});

document.getElementById('address-confirm-btn').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    var district = document.getElementById('district').value;
    var address = document.getElementById('address').value;

    if (city && district && address) {
        document.querySelector('#address-info p').textContent = city + district + address;
        document.getElementById('addressModal').style.display = 'none';
    } else {
        alert('請填寫完整地址信息');
    }
});

function updateDistricts() {
    var city = document.getElementById('city').value;
    var districtSelect = document.getElementById('district');
    districtSelect.innerHTML = ''; // 清空原有的选项

    var districts = {
        "台北市": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
        "新北市": ["板橋區", "新莊區", "中和區", "永和區", "土城區", "樹林區", "三峽區", "鶯歌區", "三重區", "蘆洲區", "五股區", "泰山區", "林口區", "八里區", "淡水區", "三芝區", "石門區", "金山區", "萬里區", "汐止區", "瑞芳區", "貢寮區", "平溪區", "雙溪區", "深坑區", "石碇區", "新店區", "坪林區", "烏來區"],
        "桃園市": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "大溪區", "龍潭區", "龜山區", "大園區", "觀音區", "新屋區", "復興區"],
        "台中市": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區"],
        "台南市": ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"],
        "新竹縣": ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉"],
        "高雄市": ["楠梓區", "左營區", "鼓山區", "三民區", "鹽埕區", "前金區", "新興區", "苓雅區", "前鎮區", "旗津區", "小港區", "鳳山區", "林園區", "大寮區", "大樹區", "大社區", "仁武區", "鳥松區", "岡山區", "橋頭區", "燕巢區", "田寮區", "阿蓮區", "路竹區", "湖內區", "茄萣區", "永安區", "彌陀區", "梓官區", "旗山區", "美濃區", "六龜區", "甲仙區", "杉林區", "內門區", "茂林區", "桃源區", "那瑪夏區"]
    };

    var selectedDistricts = districts[city] || [];
    selectedDistricts.forEach(district => {
        var option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", function() {
const secondConfirmModal = document.getElementById("secondConfirmModal");
const successModal = document.getElementById("successModal");
const confirmOrderMainBtn = document.getElementById("confirmOrderMainBtn");
const confirmOrderBtn = document.getElementById("confirmOrderBtn");
const cancelOrderBtn = document.getElementById("cancelOrderBtn");
const thankYouBtn = document.getElementById("thankYouBtn");
const closeBtns = document.querySelectorAll(".close");

confirmOrderMainBtn.addEventListener("click", function(event) {
    event.preventDefault();  // 防止表單提交
    showModal(secondConfirmModal);
});

confirmOrderBtn.addEventListener("click", function() {
    hideModal(secondConfirmModal);
    showModal(successModal);
});

cancelOrderBtn.addEventListener("click", function() {
    hideModal(secondConfirmModal);
});

thankYouBtn.addEventListener("click", function() {
    hideModal(successModal);
    // 在這裡添加返回主畫面的邏輯
    window.location.href = '../html/index.html';  // 假設主畫面的 URL 是 '/'
});

closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const modal = this.closest(".modal");
        hideModal(modal);
    });
});

function showModal(modal) {
    modal.style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}
});