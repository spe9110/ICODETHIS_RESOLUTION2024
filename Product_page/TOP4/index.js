const productObj = [
    {
        "color": "yellow",
        "name": "Rotterdam Blick",
        "description": "This trapezium bag measures 31 x 15 x 30 cm and has 2 exterior and 3 interior pockets. It's made of faux leather, has etched patterns and is fluorescent red. Wear it with jeans and daquiri.",
        "price": 79.95,        
        "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },

    {
        "color": "red",
        "name": "Thotterdam Thicc",
        "description": "This platinum bag measures 31 x 15 x 30 cm and has 2 exterior and 3 interior pockets. It's made of faux leather, has etched patterns and is super black. Wear it with jeans and daquiri.",
        "price": 69.95,
        "image": "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    
    {
        "color": "black",
        "name": "Snotterdam Stick",
        "description": "This.. well.. \"evil\" bag measures 6 x 6 x 6 cm and has 2 exterior and 3 interior pockets. It's made of faux human skin, has terrifying patterns and is fluorescent red. It seems cheap, but it comes at a great cost.",
        "price": 6.66,
        "image": "https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    }
]
function switchProduct(index) {
    let bagName = document.querySelector("h1");
    bagName.innerHTML = `Bag</br>${productObj[index].name}`;
    let bagDescription = document.querySelector("p");
    bagDescription.innerText = `${productObj[index].description}`;
    let bagPrice = document.querySelector("h2");
    bagPrice.innerText = `€${productObj[index].price}`;
    let image = document.querySelector("img");
    image.src = `${productObj[index].image}`;
}


const colorToggles = document.querySelectorAll(".colors");

colorToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
        switchProduct(index);
    })
})


// toggle extra text at smaller screens
const btnShow = document.querySelector(".see-more");
const showMore = document.getElementById("showMore");
const showLess = document.getElementById("showLess");
const p = document.querySelector("p");

function addShow(e) {
    e.classList.add("show");
    showMore.classList.add("span-hide");
    showLess.classList.remove("span-hide");
}
function addHide(e) {
    e.classList.remove("show");
    showMore.classList.remove("span-hide");
    showLess.classList.add("span-hide");
}

showMore.addEventListener("click", () => addShow(p));
showLess.addEventListener("click", () => addHide(p));