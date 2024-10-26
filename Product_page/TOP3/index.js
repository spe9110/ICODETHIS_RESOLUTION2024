document.querySelectorAll('.color-circle').forEach((circle, index) => {
    circle.addEventListener('click', function () {
        const hue = this.getAttribute('data-hue');
        const image = document.getElementById('purse-image');
        const priceH1 = document.querySelector('.price h1');

        image.style.filter = `hue-rotate(${hue}deg)`;

        image.style.animation = 'none';
        image.offsetHeight;
        image.style.animation = 'fall-from-top 0.5s ease-out';

        priceH1.textContent = '69.95€';
        priceH1.style.fontSize = "2.2rem";

        if (index === 2) {
            priceH1.textContent = 'Sold Out';
            priceH1.style.fontSize = "1.5rem"
        }
    });
});

const cartBtn = document.querySelector('.btn-add-to-cart');
cartBtn.addEventListener('click', showNotification)
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

