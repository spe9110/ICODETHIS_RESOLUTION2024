// Write your JavaScript code here

addEventListener("DOMContentLoaded", (event) => { 
    const swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev', 
        },
    });
});
