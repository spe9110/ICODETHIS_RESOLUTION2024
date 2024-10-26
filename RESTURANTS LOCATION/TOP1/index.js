const RESTAURANTS = [
    {
        "id": 21,
        "name": "Milis Burgers",
    "imageUrl": "https://images.pexels.com/photos/10922929/pexels-photo-10922929.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
        "rating": 4,
        "distance": 2.5,
    "tags": ["gluten-free", "fast-food", "vegetarian", "salads", "pasta","grill","american"],
    "bookmark": false
    },
    {
        "id": 22,
        "name": "Pizza Per Tutti",
        "imageUrl": "https://images.pexels.com/photos/4661987/pexels-photo-4661987.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
        "rating": 5,
        "distance": 3.8,
        "tags": ["italian", "pizzas", "pasta", "anti-pasta", "gluten-free", "fast-food", "vegetarian",],
        "bookmark": true
    },
    {
        "id": 23,
        "name": "Everything Green",
        "imageUrl": "https://images.pexels.com/photos/8251536/pexels-photo-8251536.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
        "rating": 3,
        "distance": 1.5,
        "tags": ["salads", "vegan", "vegetarian", "gluten-free","pasta"],
        "bookmark": false
    },
    {
        "id": 24,
        "name": "Sushi Galore",
        "imageUrl": "https://images.pexels.com/photos/5900504/pexels-photo-5900504.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
        "rating": 2,
        "distance": 4.2,
        "tags": ["sushi", "fish", "traditional", "salads","gluten-free"],
        "bookmark": false
    },
    {
        "id": 25,
        "name": "Patsies Postres",
        "imageUrl": "https://images.pexels.com/photos/5386671/pexels-photo-5386671.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
        "rating": 5,
        "distance": 2.0,
        "tags": ["chocolate", "ice cream", "jelly", "custard", "vegetarian"],
        "bookmark": false
}, ,
{
    "id": 3,
    "name": "Burger Bistro",
    "imageUrl": "https://source.unsplash.com/150x150/?burger",
    "rating": 4.2,
    "distance": 2.0,
    "tags": ["burgers", "american", "fast-food"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 4,
    "name": "Sushi Sensation",
    "imageUrl": "https://source.unsplash.com/150x150/?sushi",
    "rating": 3,
    "distance": 1.5,
    "tags": ["sushi", "japanese", "seafood"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 5,
    "name": "Taco Time",
    "imageUrl": "https://source.unsplash.com/150x150/?tacos",
    "rating": 4,
    "distance": 4.5,
    "tags": ["mexican", "tacos", "spicy"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 6,
    "name": "Pasta Palace",
    "imageUrl": "https://source.unsplash.com/150x150/?pasta",
    "rating": 5,
    "distance": 2.5,
    "tags": ["italian", "pasta", "gluten-free", "vegetarian"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 7,
    "name": "Wok Wonderland",
    "imageUrl": "https://source.unsplash.com/150x150/?wok",
    "rating": 2,
    "distance": 3.0,
    "tags": ["asian", "chinese", "stir-fry"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 8,
    "name": "Mediterranean Delight",
    "imageUrl": "https://source.unsplash.com/150x150/?greek-food",
    "rating": 4.7,
    "distance": 1.8,
    "tags": ["mediterranean", "kebabs", "hummus"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 9,
    "name": "Sizzling Steaks",
    "imageUrl": "https://source.unsplash.com/150x150/?steak",
    "rating": 3,
    "distance": 2.8,
    "tags": ["steakhouse", "grill", "bbq"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 10,
    "name": "Vegan Vibes",
    "imageUrl": "https://source.unsplash.com/150x150/?salad",
    "rating": 3,
    "distance": 3.2,
    "tags": ["vegan", "plant-based", "healthy"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 11,
    "name": "Fisherman's Catch",
    "imageUrl": "https://source.unsplash.com/150x150/?fried-fish",
    "rating": 1,
    "distance": 1.2,
    "tags": ["seafood", "fresh", "grilled"],
    "bookmark": Math.random() < 0.5
},
{
    "id": 12,
    "name": "Noodle Nirvana",
    "imageUrl": "https://source.unsplash.com/150x150/?noodles",
    "rating": 1,
    "distance": 2.3,
    "tags": ["asian", "noodles", "ramen"],
    "bookmark": Math.random() < 0.5
},
]


/************** SELECTORS **************/

const header = document.querySelector("header");
const tplMenu = document.querySelector("#tpl-menu")
const listMenu = document.querySelector("#list-menu")
const searchInput = document.querySelector("#search-input")
const btnSearch = document.querySelector("#btn-search");
const searchBox = document.querySelector("#search-box");
const panelFilters = document.querySelector("#panel-filters");
const filterTags = panelFilters.querySelector("#list-tags");
const btnsFilterClose = panelFilters.querySelectorAll("[btn-close-filters]");
const btnFilters = document.querySelector("#btn-filters");



/************** RENDER LSIT **************/

function renderList(arr) {
//console.log(arr)
listMenu.innerHTML = '';
if (arr.length === 0) {
    listMenu.innerHTML = '<p class="p-8 text-center">No restaurants match your search criteria</p>';
    return
}
arr.forEach(menu => {
    const clone = tplMenu.content.cloneNode(true);
    const elImg = clone.querySelector("img");
    const elIngretients = clone.querySelector("[data-tags]");
    const btnBookmark = clone.querySelector("[btn-bookmark]");
    const btnBookmarkIcon = btnBookmark.querySelector("span");

    if (menu.bookmark) btnBookmarkIcon.classList.add("material-fill-1")
    elImg.src = menu.imageUrl;
    elImg.setAttribute("alt",menu.name)
    clone.querySelector("[data-title]").innerText = menu.name;
    clone.querySelector("[data-rating]").innerHTML = rating(menu.rating);
    clone.querySelector("[data-distance]").innerText = menu.distance;
    let tmp = '';
    menu.tags.forEach(ing => {
        tmp = tmp += `<span>${ing}</span>`
    })
    elIngretients.innerHTML = tmp;

    btnBookmark.addEventListener("click", () => {
        // Toggle the bookmark property value
        menu.bookmark = !menu.bookmark;
        if (menu.bookmark) {
            btnBookmarkIcon.classList.add("material-fill-1")
        } else {
            btnBookmarkIcon.classList.remove("material-fill-1")
        }
    })
    listMenu.append(clone)

})
}

renderList(RESTAURANTS);



/************** SEARCH **************/

// search -  eventhandlear (need to add debounce....)
searchInput.addEventListener("keydown", filterItems);

// filter menu items (name and ingrdients)
function filterItems() {
const searchTerm = searchInput.value.toLowerCase();
const filteredMenus = RESTAURANTS.filter(item => {
    const itemName = item.name.toLowerCase();
    const tags = item.tags.map(tag => tag.toLowerCase());
    return itemName.includes(searchTerm) || tags.some(tag => tag.includes(searchTerm));
});
renderList(filteredMenus);
}

// search -  button click to open search box (mainly for mobile)
let clickHandler; 
btnSearch.addEventListener("click", () => {
// set focus on search form
searchInput.focus();

btnSearch.classList.add("!text-[#D35841]");
header.classList.add("grid-cols-[40px_1fr_140px]");
searchBox.classList.add("bg-white");

function clickHandler(e){
    //console.log("doc click");
    // Check if the clicked element is not the toggle button or the element itself
    if (!header.contains(e.target)) {
        header.classList.remove("grid-cols-[40px_1fr_140px]");
        btnSearch.classList.remove("!text-[#D35841]");
        setTimeout(() => searchBox.classList.remove("bg-white"), 500);
        document.removeEventListener('click', clickHandler);  // Remove the event listener
    }
};

document.addEventListener('click', clickHandler);
});
// search - button
btnSearch.addEventListener("blur", () => {
header.classList.remove("grid-cols-[40px_1fr_140px]");
})


/************** FILTERS **************/

// filters - generate a list of tags based on the restauant tags+
// each tag will be a checkbox - the "renderListBasedOnFilters" function will check these checkboxes to then filter the results.
function generateTagButtons(arr) {
const uniqueTags = new Set();

// get unique tags from the menu data
arr.forEach(item => {
    item.tags.forEach(tag => uniqueTags.add(tag));
});

// sort
const sortedTags = Array.from(uniqueTags).sort();

sortedTags.forEach(tag => {
    const buttonID = `tag-${tag.replace(/\s+/g, '-').toLowerCase()}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = buttonID;
    checkbox.value = tag
    checkbox.name = "tag"

    const label = document.createElement("label");
    label.innerText = tag;
    label.htmlFor = buttonID;

    checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
            label.classList.add("bg-amber-900", "text-white");
        } else {
            label.classList.remove("bg-amber-900", "text-white");
        }
    });
    label.prepend(checkbox);
    filterTags.appendChild(label);
});
}
// filter the items and re-render the list
function renderListBasedOnFilters() {
let arr = RESTAURANTS;

//console.log(bookmarkedOnly);
// fFilter by bookmark status
if (document.querySelector("#only-bookmarked").checked) {
    arr = arr.filter(item => item.bookmark);
}

// filter by  tags
const selectedTags = Array.from(filterTags.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
//console.log(selectedTags)
if (selectedTags.length > 0) {
    arr = arr.filter(item => selectedTags.every(tag => item.tags.includes(tag)));
}

// rerender the list
renderList(arr);
}

// filters - generate the tags - only do this once so that we can "remeber" the tags selected
generateTagButtons(RESTAURANTS);

// filters - open filter panel
btnFilters.addEventListener("click", () => {
toggleFiltersPanel()
})

// filters - close filter panel (both buttons do the same)
btnsFilterClose.forEach(btn => {
btn.addEventListener("click", () => {
    toggleFiltersPanel(false)
})
})

// open or close filter panel
function toggleFiltersPanel(state = true) {
if (state) {
    panelFilters.classList.remove("-translate-x-full");
} else {
    panelFilters.classList.add("-translate-x-full");
    renderListBasedOnFilters()
}
}




/************** UTILITIES **************/

// convert rating to stars
function rating(rate) {
const val = Math.floor(rate);
let stars = '';
for (let i = 1; i <= 5; i++) {
    const fill = i <= val ? '' : '!text-amber-700';
    stars += `<span  class="material-symbols-outlined material-fill-1 ${fill}">star</span>`
}
return stars
}