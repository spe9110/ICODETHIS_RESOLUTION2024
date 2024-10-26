const DATA = [
    {
        id: 101,
        brand: "Hermes",
        model: "Birkin Bag",
        category: "Bag",
        price: '5,000',
        isOnSale: true,
        salePrice: '2,000',
        description: "The Birkin bag (or simply Birkin) is a tote bag introduced in 1984 by French luxury goods maker Hermès. Birkin bags are handmade from leather and are named after the English-French actress and singer Jane Birkin.",
        items: [
            {
                color: 'Rose Lipstick',
                hex: '#F17E9D',
                imgUrl: 'https://i.imgur.com/yXhQKom.png',
                size: 35,
            },
            {
                color: 'Rose Shocking',
                hex: '#DB1D87',
                imgUrl: 'https://i.imgur.com/E66c26n.png',
                size: 30,
            },
            {
                color: 'Noir',
                hex: '#3D3C43',
                imgUrl: 'https://i.imgur.com/IchfkLr.png',
                size: 25,
            }
        ]
    },
    {
        id: 102,
        brand: "Chanel",
        model: "Classic Flap Bag",
        category: "Bag",
        price: '5,000',
        isOnSale: false,
        salePrice: null,
        description: "The Chanel Classic Flap Bag is an iconic handbag known for its timeless design and luxurious materials.",
        items: [
            {
                color: 'Black',
                hex: '#000000',
                imgUrl: 'https://i.imgur.com/qV0HzDr.png',
                size: 25,
            },
            {
                color: 'Yellow',
                hex: 'yellow',
                imgUrl: 'https://i.imgur.com/Sv9kkf6.png',
                size: 25,
            },
            {
                color: 'Fuscia',
                hex: '#DB1D87',
                imgUrl: 'https://i.imgur.com/2D4r608.png',
                size: 25,
            }
        ]
    },
    {
        id: 103,
        brand: "Gucci",
        model: "GG Marmont Mini Bag",
        category: "Bag",
        price: '1,200',
        isOnSale: true,
        salePrice: '1,000',
        description: "The Gucci GG Marmont Mini Bag features a chevron design and a vintage-inspired logo, perfect for any occasion.",
        items: [
            {
                color: 'Pink',
                hex: '#FFC0CB',
                imgUrl: 'https://i.imgur.com/YBaiGmf.png',
                size: 20,
            },
            {
                color: 'Black',
                hex: '#000000',
                imgUrl: 'https://i.imgur.com/AuWcFwZ.png',
                size: 20,
            }
        ]
    },
    {
        id: 106,
        brand: "Balenciaga",
        model: "Hourglass Bag",
        category: "Handbag",
        price: '1,635',
        isOnSale: false,
        salePrice: null,
        description: "The Balenciaga Hourglass Bag features a unique silhouette with a curvilinear base, crafted from luxurious leather. This statement piece combines modern design with classic elegance, perfect for elevating any outfit.",
        items: [
            {
                color: 'Black',
                hex: '#101820',
                imgUrl: 'https://i.imgur.com/7xQ97AX.png',
                size: 'U',
            },
            {
                color: 'Silver',
                hex: '#C0C0C0',
                imgUrl: 'https://i.imgur.com/Zpaw2VG.png',
                size: 'U',
            },
            {
                color: 'Crocodile Effect',
                hex: '#1D5A41',
                imgUrl: 'https://i.imgur.com/e7sP3uV.png',
                size: 'U',
            }
        ]
    },

    {
        id: 107,
        brand: "Prada",
        model: "Symbole Embroidered Fabric Mini Bag",
        category: "Handbag",
        price: '1,600',
        isOnSale: false,
        salePrice: null,
        description: "The Prada Symbole Embroidered Fabric Mini Bag features a modern geometric design inspired by Prada's iconic triangle logo. Made with luxurious fabric and Saffiano leather details, this mini bag is both stylish and functional.",
        items: [
            {
                color: 'Tobacco/Chalk White',
                hex: '#D2B48C',
                imgUrl: 'https://i.imgur.com/vdbmyo8.png',
                size: 'U',
            },
            {
                color: 'Baltic Blue/Chalk White',
                hex: '#007BA7',
                imgUrl: 'https://i.imgur.com/vOk6dXZ.png',
                size: 'U',
            },
            {
                color: 'Black/Beige',
                hex: '#000000',
                imgUrl: 'https://i.imgur.com/45F3Jl3.png',
                size: 'U',
            }
        ]
    },
]

const productTemplate = document.getElementById('product-item-template');
const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let activeIndex = 1;
const totalSlides = DATA.length;

// Add event listeners to navigation buttons
prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
});

function createSlide(item) {
    const clone = productTemplate.content.cloneNode(true);
    const select = (selector) => clone.querySelector(selector);

    select('.slide').setAttribute('data-id', item.id);
    select('[data-category]').textContent = item.category;
    select('[data-brand]').textContent = item.brand;
    select('[data-model]').textContent = item.model;
    select('[data-description]').textContent = item.description;

    let colorsHTML = '';
    let imgSrc = '';
    const uniqueSizes = new Set(item.items.map(item => item.size));

    item.items.forEach((item, index) => {
        colorsHTML += ` 
            <li class="color-item" style="--_item-color: ${item.hex}">
                <button ${index === 0 ? 'class="selected"' : ''} data-index="${index}">
                    <span class="visually-hidden">${item.color}: ${item.hex}</span>
                </button>
            </li>`;
        if (index === 0) imgSrc = item.imgUrl;
    });

    const sizesHTML = Array.from(uniqueSizes).map((size, index) => `
        <li class="sizes-item">
            <button ${index === 0 ? 'class="selected"' : ''} data-size="${size}">${size}</button>
        </li>
    `).join('');

    const colorsList = select('.colors-list');
    const sizesList = select('.sizes-list');
    const productImage = select('img');

    sizesList.setAttribute('data-brand', item.brand);
    colorsList.innerHTML = colorsHTML;
    sizesList.innerHTML = sizesHTML;
    productImage.src = imgSrc;

    function updateSelection(index) {

        // Update colors
        colorsList.querySelectorAll('button').forEach((btn, i) => {
            btn.classList.toggle('selected', i === index);
        });

        // Update image and accent color
        const selectedItem = item.items[index];
        productImage.src = selectedItem.imgUrl;

        // Update size selection
        const selectedSize = selectedItem.size;
        sizesList.querySelectorAll('button').forEach((btn) => {
            const isSelected = btn.dataset.size === String(selectedSize);
            btn.classList.toggle('selected', isSelected);
        });
    }

    // Add event listener to colors list
    colorsList.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('button');
        if (!clickedButton) return;

        const colorIndex = parseInt(clickedButton.dataset.index, 10);
        updateSelection(colorIndex);
    });

    // Add event listener to sizes list
    sizesList.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('button');
        if (!clickedButton) return;

        const selectedSize = clickedButton.dataset.size;
        const colorIndex = item.items.findIndex(item => String(item.size) === selectedSize);
        if (colorIndex !== -1) {
            updateSelection(colorIndex);
        }
    });

    // Initial update
    updateSelection(0);

    return clone;
}

function updateSlidePositions() {
    const slides = sliderInner.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        const position = (index - activeIndex + totalSlides) % totalSlides;
        // Remove all position classes first
        slide.classList.remove('pos-1', 'pos-active', 'pos-3', 'pos-4', 'pos-5');
        if (position === 1) slide.classList.add('pos-active');
        else if (position === 0) slide.classList.add('pos-1');
        else if (position === 2) slide.classList.add('pos-3');
        else if (position === 3) slide.classList.add('pos-4');
        else slide.classList.add('pos-5');
    });
}

function moveSlide(direction) {
    activeIndex = (activeIndex + direction + totalSlides) % totalSlides;
    updateSlidePositions();
}

function init() {
    DATA.forEach(product => sliderInner.append(createSlide(product)));
    updateSlidePositions();
}

init();

