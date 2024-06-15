const stores = [
    { name: "台北101店", address: "台北市信義區市府路53號9F" },
    { name: "台北忠孝店", address: "台北市大安區敦化南路一段187巷29號1F" },
    { name: "台北大安店", address: "台北市大安區大安路一段103巷13號" },
    { name: "台北南西店", address: "台北市中山區中山北路二段20巷5號2F" },
    { name: "桃園中三店", address: "桃園市中壢區新生路88號8號" },
    { name: "桃園介壽店", address: "桃園市八德區介壽路二段1068號" },
    { name: "台中三民店", address: "台中市北區三民路三段92號" },
    { name: "宜蘭羅東店", address: "宜蘭縣羅東鎮興東路6號6號" },
    { name: "基隆仁三店", address: "基隆市仁愛區仁三路10號" },
    { name: "新竹南大店", address: "新竹市東區南大路222號" },
    
    
    
];

function searchStores() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const storeList = document.getElementById('storeList');
    storeList.innerHTML = '';

    const filteredStores = stores.filter(store => 
        store.name.toLowerCase().includes(input) || store.address.toLowerCase().includes(input)
    );

    if (filteredStores.length === 0) {
        storeList.innerHTML = '<p>找不到符合的門市。</p>';
    } else {
        filteredStores.forEach(store => {
            const storeDiv = document.createElement('div');
            storeDiv.classList.add('store');
            storeDiv.innerHTML = `<strong>${store.name}</strong><br>${store.address}`;
            storeList.appendChild(storeDiv);
        });
    }
}
