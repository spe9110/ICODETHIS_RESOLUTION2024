// Add JavaScript code here

const links = document.querySelectorAll('a');
const mainContainer = document.querySelector('main');


// Prevent links default behaviour
const overrideLinks = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}


//The Marcin Malecki's way for thumbnail perfection
if (navigator.userAgent.includes("Headless")) {
    mainContainer.style.transitionDuration = '0s';
    mainContainer.classList.remove('translate-y-100vh');
    mainContainer.classList.remove('scale-0');
    mainContainer.classList.remove('opacity-0');

}


window.addEventListener('DOMContentLoaded', () => {
    overrideLinks();
    setTimeout(() => {
        mainContainer.classList.remove('translate-y-100vh');
        mainContainer.classList.remove('scale-0');
        mainContainer.classList.remove('opacity-0');

    }, 1000);

});