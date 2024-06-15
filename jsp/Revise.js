document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const phoneCheckmark = document.getElementById("phone-checkmark");
    const emailCheckmark = document.getElementById("email-checkmark");
    const registrationForm = document.getElementById("registrationForm");

    const locationData = {
        "台灣": {
            "新北市": ["板橋區", "三重區", "中和區", "永和區", "新莊區"],
            "台北市": ["中正區", "大同區", "中山區", "松山區", "大安區"],
            "台中市": ["中區", "東區", "南區", "西區", "北區"],
            "高雄市": ["鹽埕區", "鼓山區", "左營區", "楠梓區", "三民區"],
            "台南市": ["中西區", "東區", "南區", "北區", "安平區"]
        },
        "美國": {
            "紐約": ["曼哈頓", "布魯克林", "皇后區", "布朗克斯", "史泰登島"],
            "洛杉磯": ["好萊塢", "唐人街", "比佛利山", "聖塔莫尼卡", "市中心"]
        },
        "日本": {
            "東京": ["千代田區", "中央區", "港區", "新宿區", "文京區"],
            "大阪": ["北區", "中央區", "天王寺區", "浪速區", "福島區"]
        },
        "韓國": {
            "首爾": ["鐘路區", "中區", "龍山區", "麻浦區", "江南區"],
            "釜山": ["中區", "西區", "東區", "南區", "北區"]
        },
        "中國": {
            "北京": ["東城區", "西城區", "朝陽區", "豐台區", "石景山區"],
            "上海": ["黃浦區", "徐匯區", "長寧區", "靜安區", "普陀區"]
        },
        "西班牙": {
            "馬德里": ["市中心", "塞拉諾", "查馬丁", "薩拉曼卡", "阿爾塔米拉"],
            "巴塞隆納": ["哥特區", "埃伊桑普雷", "蒙特惠克", "波瓦多", "聖安德魯"]
        },
        "義大利": {
            "羅馬": ["特拉斯提弗列", "聖保羅", "聖洛倫佐", "特斯塔丘", "雷斯圖克"],
            "米蘭": ["納維利", "布雷拉", "伊索拉", "桑塔·朱利亞", "聖塞西里奧"]
        },
        "澳洲": {
            "悉尼": ["市中心", "岩石區", "情人港", "北悉尼", "邦迪"],
            "墨爾本": ["南岸", "費茲洛伊", "卡爾頓", "聖基爾達", "布萊頓"]
        }
    };

    function updateCities() {
        const countrySelect = document.getElementById("country");
        const citySelect = document.getElementById("city");
        const districtSelect = document.getElementById("district");
        const selectedCountry = countrySelect.value;

        // 清空目前的城市和行政區選項
        citySelect.innerHTML = "";
        districtSelect.innerHTML = "";

        // 根據選擇的國家更新城市選項
        if (locationData[selectedCountry]) {
            Object.keys(locationData[selectedCountry]).forEach(function(city) {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            updateDistricts(); // 更新城市後自動更新行政區
        }
    }

    function updateDistricts() {
        const citySelect = document.getElementById("city");
        const districtSelect = document.getElementById("district");
        const selectedCity = citySelect.value;

        // 清空目前的行政區選項
        districtSelect.innerHTML = "";

        // 根據選擇的城市更新行政區選項
        if (locationData[document.getElementById("country").value] && locationData[document.getElementById("country").value][selectedCity]) {
            locationData[document.getElementById("country").value][selectedCity].forEach(function(district) {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    }

    // 預設更新城市和行政區選項
    updateCities();

    phoneInput.addEventListener("input", function() {
        if (phoneInput.value.length === 10) {
            phoneCheckmark.style.display = "inline";
        } else {
            phoneCheckmark.style.display = "none";
        }
    });

    emailInput.addEventListener("input", function() {
        if (emailInput.value.endsWith("@gmail.com")) {
            emailCheckmark.style.display = "inline";
        } else {
            emailCheckmark.style.display = "none";
        }
    });

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Save form data to localStorage
        const formData = {
            memberId: document.getElementById("member-id").textContent,
            name: document.getElementById("name").value,
            idNumber: document.getElementById("id-number").value,
            country: document.getElementById("country").value,
            city: document.getElementById("city").value,
            district: document.getElementById("district").value,
            address: document.getElementById("address").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
        };
        localStorage.setItem("formData", JSON.stringify(formData));

        // Show alert and then redirect
        alert("資料已成功儲存");
        window.location.href ="saveSuccess.html"; // Replace with the actual URL
    });

    // 預設更新城市和行政區選項
    document.getElementById("country").addEventListener("change", updateCities);
    document.getElementById("city").addEventListener("change", updateDistricts);
});


function goBack() {
    window.history.back();
}

