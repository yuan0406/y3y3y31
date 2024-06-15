function changeImage(src) {
    document.querySelector('.main-image img').src = src;
}

document.addEventListener('DOMContentLoaded', function() {
    let favoriteButtons = document.getElementsByClassName('favorite-button');
    for (let i = 0; i < favoriteButtons.length; i++) {
        favoriteButtons[i].addEventListener('click', function() {
            if (this.textContent === '收藏') {
                this.textContent = '取消收藏';
            } else {
                this.textContent = '收藏';
            }
        });
    }

    let thumbnails = document.querySelectorAll('.thumbnail img');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            changeImage(this.src);
        });
    });

    document.querySelector('.prev').addEventListener('click', function() {
        changeImageWithOffset(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeImageWithOffset(1);
    });

    function changeImageWithOffset(offset) {
        let currentImageSrc = document.querySelector('.main-image img').src;
        let thumbnailSources = Array.from(thumbnails).map(thumb => thumb.src);
        let currentIndex = thumbnailSources.indexOf(currentImageSrc);
        let newIndex = (currentIndex + offset + thumbnailSources.length) % thumbnailSources.length;
        changeImage(thumbnailSources[newIndex]);
    }

    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const sizeSelect = document.getElementById('size');
            const optionValue = this.getAttribute('data-size');
            sizeSelect.value = optionValue;
        });
    });
});

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    const selectedContent = document.getElementById(id);
    selectedContent.classList.add('active');

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;
    let reviewsCount = document.querySelectorAll('.review').length;
    let totalRating = reviewsCount * 4.9;
    let qualityTotalRating = reviewsCount * 4.9;
    let conformityTotalRating = reviewsCount * 4.9;
    let speedTotalRating = reviewsCount * 4.9;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add('selected');
            }
        });
    });

    document.querySelector('.review-form button').addEventListener('click', function() {
        var input = document.querySelector('.review-form input[type="text"]');
        if (input.value.trim() === '') {
            alert('請輸入評論內容');
            return;
        }
        if (selectedRating === 0) {
            alert('請選擇評分');
            return;
        }

        reviewsCount++;
        totalRating += parseFloat(selectedRating);
        qualityTotalRating += parseFloat(selectedRating);
        conformityTotalRating += parseFloat(selectedRating);
        speedTotalRating += parseFloat(selectedRating);

        const averageRating = (totalRating / reviewsCount).toFixed(1);
        const averageStars = '★'.repeat(Math.round(averageRating)) + '☆'.repeat(5 - Math.round(averageRating));
        const qualityRating = (qualityTotalRating / reviewsCount).toFixed(1);
        const conformityRating = (conformityTotalRating / reviewsCount).toFixed(1);
        const speedRating = (speedTotalRating / reviewsCount).toFixed(1);

        document.getElementById('average-rating').innerText = averageRating;
        document.getElementById('average-stars').innerText = averageStars;
        document.getElementById('quality-rating-fill').style.width = (qualityRating * 20) + '%';
        document.getElementById('conformity-rating-fill').style.width = (conformityRating * 20) + '%';
        document.getElementById('speed-rating-fill').style.width = (speedRating * 20) + '%';
        document.getElementById('quality-rating-score').innerText = qualityRating;
        document.getElementById('conformity-rating-score').innerText = conformityRating;
        document.getElementById('speed-rating-score').innerText = speedRating;

        var reviewSection = document.querySelector('.reviews');
        var newReview = document.createElement('div');
        newReview.classList.add('review');
        var starsHtml = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);
        newReview.innerHTML = `
            <span class="review-user">你</span>
            <span class="review-rating">${starsHtml}</span>
            <span class="review-date">${new Date().toISOString().split('T')[0]}</span>
            <p>${input.value}</p>
        `;
        reviewSection.prepend(newReview);
        input.value = '';
        stars.forEach(s => s.classList.remove('selected'));
        selectedRating = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const colorBoxes = document.querySelectorAll('.color-box');
    const sizeSelect = document.getElementById('size');
    
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const selectedOptionValue = this.getAttribute('data-size');
            sizeSelect.value = selectedOptionValue;
        });
    });
});

document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', function() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let productInfo = {
            name: document.querySelector('.product-info h1').textContent,
            price: document.querySelector('.product-info .price').textContent,
            imgSrc: document.querySelector('.main-image img').src
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
                this.innerHTML = '\ue63e';
            } else {
                this.innerHTML = '\ue663';
            }
        });
    }
});
