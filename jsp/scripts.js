let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // 每5秒更換一次圖片
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = document.getElementsByClassName("mySlides").length}
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; dots.length > i; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
}
function closeWindow() {
    window.close(); // This will close the current window/tab
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function toggleSearchResults() {
    const searchResults = document.getElementById('searchResults');

    if (searchResults.classList.contains('active')) {
        searchResults.classList.remove('active');
    } else {
        searchResults.classList.add('active');
    }
}
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