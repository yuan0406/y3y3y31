document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', function() {
        // 假設有一個全域的購物車列表
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let product = button.closest('.product');
        let productInfo = {
            name: product.querySelector('h3').textContent,
            price: product.querySelector('p').textContent,
            imgSrc: product.querySelector('img').src
        };
        cart.push(productInfo);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('商品已加入購物車');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let favoriteButtons = document.getElementsByClassName('favorite-button');
    for (let i = 0; i < favoriteButtons.length; i++) {
        favoriteButtons[i].addEventListener('click', function() {
            if (this.innerHTML === '\ue663') {
                this.innerHTML = '\ue63e'; // 替換成取消收藏的圖示
            } else {
                this.innerHTML = '\ue663'; // 替換成收藏的圖示
            }
        });
    }
});