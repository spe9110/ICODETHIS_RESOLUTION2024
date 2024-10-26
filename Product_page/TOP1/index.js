// Write your JavaScript code // Add JavaScript code
console.clear();
const links = document.querySelectorAll('a');
const mainContainer = document.querySelector('main');


// Override Anchor tags default behaviour
const overrideLinkBehaviour = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
};

// Updates Bag active;
const updateBags = (id) => {

    const exitBag = document.querySelector('.image--active');
    exitBag.style.setProperty('transition', 'transform .800s ease-in-out, filter .800s ease-in-out, opacity .400s .600s ease-in-out')
    exitBag.classList.remove('image--active');

    setTimeout(() => {
        exitBag.style.setProperty('transition', 'transform 0s ease-in-out, filter 0s ease-in-out, opacity 0s ease-in-out');
        exitBag.classList.add('image--right');
    }, 1600);

    const entryBag = document.querySelector(`img[data-id='${id}']`);
    entryBag.style.setProperty('transition', 'transform 0s ease-in-out, filter 0s ease-in-out, opacity 0s ease-in-out');
    entryBag.classList.remove('image--right');
    entryBag.style.setProperty('transition', 'transform 800ms ease-in-out, filter .800s ease-in-out, opacity .400s ease-in-out');
    entryBag.classList.add('image--active');



}

// Updates Underlay active;
const updateUnderlays = (id) => {
    const exitUnderlay = document.querySelector('.underlay--active');
    exitUnderlay.style.setProperty('transition', 'transform .400s .400s ease-in-out, opacity .400s .400s ease-in-out')
    exitUnderlay.classList.remove('underlay--active');

    setTimeout(() => {
        exitUnderlay.style.setProperty('transition', 'transform 0s ease-in-out, opacity 0s ease-in-out');
        exitUnderlay.classList.add('underlay--right');
    }, 800);

    const entryUnderlay = document.querySelector(`.main-underlay[data-id='${id}']`);
    entryUnderlay.style.setProperty('transition', 'transform 0s ease-in-out, opacity 0s ease-in-out');
    entryUnderlay.classList.remove('underlay--right');
    entryUnderlay.style.setProperty('transition', 'transform 400ms ease-in-out, opacity 400ms ease-in-out');
    entryUnderlay.classList.add('underlay--active');
}

// Generic Function for Elem Update
const updateElem = (id, elem, activeClass) => {
    document.querySelector(`.${activeClass}`).classList.remove(`${activeClass}`);
    const entryUnderlay = document.querySelector(`.${elem}[data-id='${id}']`);
    entryUnderlay.classList.add(`${activeClass}`);
}


// Show/Hide Number input for custom amount
document.querySelectorAll('input[name="color"]').forEach(input => {
    input.addEventListener('change', () => {
        mainContainer.classList.add('container--animation');
        setTimeout(() => {
            mainContainer.classList.remove('container--animation');
        }, 300);
        updateBags(+input.value);
        updateUnderlays(+input.value);
        updateElem(+input.value, 'body-underlay', 'body-underlay--active');
        updateElem(+input.value, 'product-item', 'product-item--active');
        updateElem(+input.value, 'price-item', 'price-item--active');

    })

})

//The Marcin Malecki's way for thumbnail perfection
if (navigator.userAgent.includes("Headless")) {

}


window.addEventListener('DOMContentLoaded', () => {
    overrideLinkBehaviour();
});