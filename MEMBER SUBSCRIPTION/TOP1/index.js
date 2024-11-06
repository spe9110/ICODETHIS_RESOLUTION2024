// Add JavaScript code here




const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const carousel = document.querySelector('.carousel-items');
const carouselItems = document.querySelectorAll('.carousel-items > .carousel-item')


let counter = 3;
const sizeItem = '208';

carousel.style.transform = 'translateX(' + (-sizeItem * counter) + 'px)';

btnRight.addEventListener('click', () => {
    if (counter >= carouselItems.length - 3) return;
    carousel.style.transition = 'transform .4s ease-in-out';
    counter++;
    carousel.style.transform = 'translateX(' + (-sizeItem * counter) + 'px)';
    
});


btnLeft.addEventListener('click', () => {
    if (counter <= 2) return;
    carousel.style.transition = 'transform .4s ease-in-out';
    counter--;
    carousel.style.transform = 'translateX(' + (-sizeItem * counter) + 'px)';

});


carousel.addEventListener('transitionend', () => {
    if (carouselItems[counter].id == 'last-clone') {
        carousel.style.transition = 'none';
        counter = carouselItems.length - 4;
        carousel.style.transform = 'translateX(' + (-sizeItem * counter) + 'px)';
    };

    if (carouselItems[counter].id == 'first-clone') {
        carousel.style.transition = 'none';
        counter = carouselItems.length - counter;
        carousel.style.transform = 'translateX(' + (-sizeItem * counter) + 'px)';
    };
});
