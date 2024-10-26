const restaurants = [
    {
        "id": 1,
        "restaurantName": "Tasty Bites",
        "tags": ["Italian", "Pasta", "Fine Dining"],
        "rating": 3,
        "distance": 3.2,
        "imgUrl": "https://loremflickr.com/150/150/pasta"
    },
    {
        "id": 2,
        "restaurantName": "Spice Haven",
        "tags": ["Indian", "Curry", "Vegetarian"],
        "rating": 3,
        "distance": 7.2,
        "imgUrl": "https://loremflickr.com/150/150/curry"
    },
    {
        "id": 3,
        "restaurantName": "Sushi Delight",
        "tags": ["Japanese", "Sushi", "Seafood"],
        "rating": 4,
        "distance": 2.1,
        "imgUrl": "https://loremflickr.com/150/150/sushi"
    },
    {
        "id": 4,
        "restaurantName": "Mediterranean Delight",
        "tags": ["Mediterranean", "Falafel", "Casual"],
        "rating": 4,
        "distance": 5.5,
        "imgUrl": "https://loremflickr.com/150/150/falafel"
    },
    {
        "id": 5,
        "restaurantName": "Burger Bliss",
        "tags": ["American", "Burgers", "Fast Food"],
        "rating": 5,
        "distance": 8.6,
        "imgUrl": "https://loremflickr.com/150/150/burgers"
    },
    {
        "id": 6,
        "restaurantName": "Veggie Haven",
        "tags": ["Vegetarian", "Healthy", "Salads"],
        "rating": 3,
        "distance": 1.7,
        "imgUrl": "https://loremflickr.com/150/150/salad"
    },
    {
        "id": 7,
        "restaurantName": "Taco Fiesta",
        "tags": ["Mexican", "Tacos", "Street Food"],
        "rating": 4,
        "distance": 6.9,
        "imgUrl": "https://loremflickr.com/150/150/tacos"
    }
]

//parent UL to render list into
const itemsListEl = document.querySelector('.items-list');

//change bookmark icon fill
document.addEventListener('click', (e) => {
    if (e.target.closest('.fa-bookmark')) {
        const bookmarkIcon = e.target.closest('.fa-bookmark');
        bookmarkIcon.classList.toggle('fa-solid')
    }
});

//render the list items within the parent UL
function renderItems() {
    let parentHtml = '';
    restaurants.forEach((rest) => {
        parentHtml += getItemHtml(rest);
    })

    itemsListEl.innerHTML = parentHtml; 
}

//html for each item
function getItemHtml(item) {
    return `
     <li class="item row gap-1">
        <button class="item-details row ai-cen jc-sb gap-half">
            <div class="row gap-half item-details-main"> 
                <div class="img-wrap">
                    <img src="${item.imgUrl}" alt="${item.restaurantName}">
                </div>

                <div class="details-wrap grid gap-halfr">
                    <p class="bold">${item.restaurantName}</p>
                    <div class="stars row ai-cen gap-quarter small">
                        ${getRating(item)}
                    </div>

                    <ul class="tags-wrap row ai-cen gap-half small">
                        ${getTags(item.tags)}
                    </ul>
                </div>
            </div>

            <div class="nav-wrap grid pi-cen">
                <i class="fa-solid fa-arrow-turn-right"></i>
                <p class="bold">${item.distance}k</p>
            </div>
                                
        </button>
        <div class="drawer-wrap">
            <ul class="drawer-items row ai-cen gap-half">
                <button class="drawer-item grid pi-cen gap-half">
                    <i class="fa-solid fa-phone"></i>
                    <p class="small">Order</p>
                </li>
                <button class="drawer-item grid pi-cen gap-half">
                    <i class="fa-regular fa-bookmark"></i>
                    <p class="small">Bookmark</p>
                </button>
            </ul>
        
        </div>
    </li>
    `
}

//html for the stars rating
function getRating(item) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        const starClass = (i < item.rating) ? 'fa-solid' : 'fa-regular';
        starsHtml += `<i class="fa-star ${starClass}"></i>`
    }

    return starsHtml;
}

//html for the tags
function getTags(item) {
    let tagsHtml = '';
    item.forEach((tag) => {
        tagsHtml += `<li class="tag">${tag}</li>`
    })
    return tagsHtml;
}

function init() {
    renderItems();
}

init();