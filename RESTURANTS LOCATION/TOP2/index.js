// Add JavaScript code here
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                robotoSlab: ['Roboto Slab', 'serif'],
                openSans: ['Open Sans', 'sans-serif'],
                montseratt: ['Montserrat', 'sans-serif'],
                nunito: ['Nunito Sans', 'sans-serif'],
                noto: ['Noto Sans', 'sans-serif'],
                mukta: ['Mukta', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive']
            },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                xl: "10rem",
                lg: "7rem",
                md: "5rem",
                sm: "2rem"
            }
        }
    }
}

let carousel = document.getElementById("carousel");
let carouselBuffer = document.getElementById("carousel-buffer");
let restaurantBuffer = document.getElementById("restaurant-buffer");
let carouselLeft = document.getElementById("carousel-left");
let carouselRight = document.getElementById("carousel-right");

let foodCategories = [
    {
        name: "Pizza",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
    },
    {
        name: "Burger",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Indian",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Biriyani",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Cakes",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Chinese",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Pasta",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Salad",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Ice Cream",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    },
    {
        name: "Vegan",
        img: "https://source.unsplash.com/bowl-of-vegetable-salads-IGfIGP5ONV0"
    },
    {
        name: "Mexican",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg"
    }
]

let restaurants = [
    {
        name: "Italian Delights Bistro",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
        tags: "Italian, Continental, Brewery, Pizzas",
        discount: "Flat 10% Off",
        rating: 4.1,
        distance: "31 mins"
    },
    {
        name: "Spice Fusion Grill House",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
        tags: "Grill, Continental, Pub, Barbeque",
        discount: "Flat 5% Off",
        rating: 4.2,
        distance: "40 mins"
    },
    {
        name: "Tokyo Tastes Sushi Bar",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
        tags: "Japanses, Asian, Chinese, Ramen, Noodles, Sake",
        discount: "Flat 15% Off",
        rating: "4.0",
        distance: "25 mins"
    },
    {
        name: "Mediterranean Eats Oasis",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
        tags: "Mediterranean, Middle East, Falafel, Healthy",
        discount: "",
        rating: 4.0,
        distance: "35 mins"
    },
    {
        name: "Café Parisienne Patisserie",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
        tags: "French, European, Desserts, Sweets, Cafe",
        discount: "Upto 10% Off",
        rating: "3.9",
        distance: "29 mins"
    },
    {
        name: "The Great Curry House",
        img: "https://i.pinimg.com/736x/d8/61/d5/d861d51ae666427805ab9a3ce5e5f513.jpg",
        tags: "Indian, Asian, Thai, Curry, Savoury, Breads",
        discount: "Upto 15% Off",
        rating: "4.5",
        distance: "28 mins"
    },
]

function generateFoodCategories(list) {
    let output = '';
    list.forEach(item => {
        output += `
            <div class="flex flex-col items-center justify-center gap-4 cursor-pointer">
                <figure class="img h-36 w-36 object-cover rounded-lg group overflow-hidden">
                    <img src="${item.img}" alt="" class="h-36 w-36 object-cover rounded-lg group-hover:scale-125 group-hover:rotate-12 duration-150 ease-linear">
                </figure>
                <h2 class="text-xl text-black/75 font-medium">${item.name}</h2>
            </div>
        `
    })

    carousel.innerHTML = output;
}

function generateRestaurantList(list) {
    let output = ``;
    list.forEach(item => {
        output += `
            <div class="flex flex-col items-start justify-center gap-4 cursor-pointer">
                <figure class="img h-40 w-64 object-cover rounded-lg group overflow-hidden relative">
                    <img src="${item.img}" alt="${item.name}" class="h-40 w-64 object-cover rounded-lg group-hover:scale-125 group-hover:rotate-12 duration-150 ease-linear">
                    <span class="absolute bottom-2 left-2 text-white text-xl font-black tracking-wide font-robotoSlab drop-shadow-2xl [text-shadow:_0_0_20px_rgb(0_0_0_/_100%)]">${item.discount}</span>
                    <input type='checkbox' id="radio${item.name}" class="sr-only peer"/>
                    <label for="radio${item.name}" class="absolute -top-[100%] group-hover:top-2 right-2 h-10 w-10 rounded-full text-white bg-black/60 flex items-center justify-center peer-checked:[&_.fa-regular]:hidden peer-checked:[&_.fa-solid]:block duration-200 ease-linear"><i class="fa-regular fa-bookmark"></i><i class="hidden fa-solid fa-bookmark"></i></label>
                </figure>
                <div class="flex flex-col items-start justify-center gap-2">
                    <h2 class="text-sm text-black/75 font-medium">${item.name}</h2>
                    <div class="font-semibold flex items-center justify-center gap-2 text-sm">
                        <span class="bg-green-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center"><i class="fa-solid fa-star"></i></span>
                        ${item.rating} · ${item.distance}
                    </div>
                    <div class="max-w-[264px] flex items-center justify-start gap-2 flex-wrap">`

        item.tags.split(",").forEach(tag => {
            output += `
                <p class="bg-gray-100 border border-gray-400 px-2.5 py-1 rounded-lg text-xs hover:bg-gray-200 duration-150 ease-linear">${tag}</p>
            `
        })

        output += `</div>
                </div>
            </div>
        `
    })

    restaurantBuffer.innerHTML = output;
}

generateFoodCategories(foodCategories);
generateRestaurantList(restaurants);

carouselLeft.addEventListener("click", function (e) {
    carouselBuffer.scrollLeft -= 300;
})

carouselRight.addEventListener("click", function (e) {
    carouselBuffer.scrollLeft += 300;
})