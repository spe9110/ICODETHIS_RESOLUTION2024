"use strict";
addEventListener("DOMContentLoaded", () => {
	//// products
	let products = [
		{
			id: 1,
			name: "Christmas Tree Decoration",
			price: 19.99,
			date: "2023-12-01",
			isFeatured: true,
			rating: 4.5,
			soldInLast30Days: 342,
			description: "Perfect for adding a festive touch to any space, this miniature tree brings the magic of Chrstmas right into your home. Crafted with care, It's a delightful …",
			image: `<img src="https://icodethis.com/images/iCodeMas/tree.png">`,
			cartQuantity: 0,
			filters: {
				category: ["ornaments", "accesories"],
				colors: ["green"],
				size: ["small"],
			},
		},
		{
			id: 2,
			name: "Gift Box",
			price: 9.99,
			oldPrice: 12.99,
			date: "2023-10-28",
			isFeatured: true,
			rating: 3.8,
			soldInLast30Days: 203,
			description: "Unwrap the joy of the season with out elegant Gift Box decoration. Adorned with festive details, it's not just a decoration; it's a promise of surprises and …",
			image: `<img src="https://icodethis.com/images/iCodeMas/gift.png">`,
			cartQuantity: 0,
			filters: {
				category: ["accesories"],
				colors: ["red", "white"],
				size: ["large"],
			},
		},
		{
			id: 3,
			name: "Gingerbread Man Cookie",
			price: 12.99,
			date: "2023-09-22",
			isFeatured: true,
			rating: 4.7,
			soldInLast30Days: 439,
			description: "With its sugary charm and festive details, this decoration adds a touch of whimsy to your home. Hand it on your tree or display it in the kitchen for a delightful seasonal …",
			image: `<img src="https://icodethis.com/images/iCodeMas/gingerbread_cookie.png">`,
			cartQuantity: 0,
			filters: {
				category: ["cookies"],
				colors: ["red", "white", "brown"],
				size: ["small"],
			},
		},
		{
			id: 4,
			name: "Snowflake Decoration",
			price: 4.99,
			date: "2023-05-11",
			isFeatured: false,
			rating: 2.5,
			soldInLast30Days: 120,
			description: "Glistening with winter magic, this piece captures the delicate beauty of snowflakes. Hang it by the window or sprinkle them around your home for a …",
			image: `<img src="https://icodethis.com/images/iCodeMas/snowflake.png">`,
			cartQuantity: 0,
			filters: {
				category: ["ornaments", "accesories"],
				colors: ["white"],
				size: ["medium"],
			},
		},
		{
			id: 5,
			name: "Start-shaped Cookie",
			price: 12.99,
			date: "2023-07-31",
			isFeatured: false,
			rating: 3.1,
			soldInLast30Days: 235,
			description: "A star-shaped cookie is a delightful treat with a unique shape resembling a sparkling celestial body. Its golden-brown, buttery texture offers a perfect balance of sweetness, making it a delightful addition to any dessert table.",
			image: `<img src="https://icodethis.com/images/iCodeMas/star_cookie.png">`,
			cartQuantity: 0,
			filters: {
				category: ["cookies"],
				colors: ["white", "brown"],
				size: ["small"],
			},
		},
		{
			id: 6,
			name: "Santa's Hat",
			price: 39.99,
			date: "2023-11-01",
			isFeatured: false,
			rating: 4.8,
			soldInLast30Days: 512,
			description: "Santa's hat is a bright red, velvet cap with a white faux fur lining, adorned with a jolly white pompom at the brim. It is the iconic symbol of Christmas, instantly recognizable with its pointed tip and festive appearance.",
			image: `<img src="https://icodethis.com/images/iCodeMas/santa_hat.png">`,
			cartQuantity: 0,
			filters: {
				category: ["accesories"],
				colors: ["red", "white"],
				size: ["medium"],
			},
		},
		{
			id: 7,
			name: "Candy Cane",
			price: 8.99,
			date: "2022-12-06",
			isFeatured: false,
			rating: 1.2,
			soldInLast30Days: 9,
			description: "A candy cane is a hard candy treat in the shape of a cane, usually flavored with peppermint and striped with red and white. It is commonly enjoyed during the holiday season and is a classic symbol of Christmas.",
			image: `<img src="https://icodethis.com/images/iCodeMas/candy_cane.png">`,
			cartQuantity: 0,
			filters: {
				category: ["candies"],
				colors: ["red", "white"],
				size: ["small"],
			},
		},
		{
			id: 8,
			name: "Snowman Decoration",
			price: 39.99,
			date: "2023-09-14",
			isFeatured: false,
			rating: 3.7,
			soldInLast30Days: 373,
			description: "This snowman decoration features a jolly, carrot-nosed snowman with a top hat and colorful scarf, inviting a festive spirit into any space. Its rosy-cheeked smile and twinkle in its eyes bring warmth and charm to winter festivities.",
			image: `<img src="https://icodethis.com/images/iCodeMas/snowman_deco.png">`,
			cartQuantity: 0,
			filters: {
				category: ["ornaments", "accesories"],
				colors: ["red", "white", "brown"],
				size: ["small"],
			},
		},
		{
			id: 9,
			name: "Christmas Ball",
			price: 4.99,
			date: "2021-12-01",
			isFeatured: false,
			rating: 3,
			soldInLast30Days: 247,
			description: "The Christmas ball is a joyous event filled with sparkles, laughter, and merriment. Guests gather in their finest attire, dancing beneath the twinkle of festive lights, creating unforgettable memories of the most wonderful time of the year.",
			image: `<img src="https://icodethis.com/images/iCodeMas/christmas_ball.png">`,
			cartQuantity: 0,
			filters: {
				category: ["ornaments", "accesories"],
				colors: ["red", "white"],
				size: ["medium"],
			},
		},
		{
			id: 10,
			name: "Christmas Red Socks",
			price: 29.99,
			date: "2023-05-05",
			isFeatured: false,
			rating: 4.1,
			soldInLast30Days: 304,
			description: "These Christmas red socks are made of soft, cozy material and feature a charming snowflake pattern, perfect for keeping your feet warm and festive during the holiday season. With their vibrant red color and white accents, these socks will add a cheerful touch of Christmas spirit to any outfit.",
			image: `<img src="https://icodethis.com/images/iCodeMas/christmas_sock.png">`,
			cartQuantity: 0,
			filters: {
				category: ["ornaments", "accesories"],
				colors: ["red", "white"],
				size: ["medium"],
			},
		},
		{
			id: 11,
			name: "Red Ribbon",
			price: 3.99,
			date: "2023-02-04",
			isFeatured: false,
			rating: 2.1,
			soldInLast30Days: 17,
			description: "This red ribbon adds a vibrant and festive touch to any holiday setting. It features a shimmering satin ribbon that beautifully drapes, creating a lovely accent to Christmas trees, wreaths, or presents.",
			image: `<img src="https://icodethis.com/images/iCodeMas/red_ribbon.png">`,
			cartQuantity: 0,
			filters: {
				category: ["ornaments", "accesories"],
				colors: ["red"],
				size: ["small"],
			},
		},
		{
			id: 12,
			name: "Christmas Tree Cookie",
			price: 13.99,
			date: "2023-05-01",
			isFeatured: false,
			rating: 4.2,
			soldInLast30Days: 365,
			description: "The Christmas tree cookie is a festive treat shaped like a miniature evergreen tree, complete with green icing and colorful sprinkles for ornaments. It brings the holiday spirit to life, with a deliciously sweet and crunchy texture that delights both children and adults alike.",
			image: `<img src="https://icodethis.com/images/iCodeMas/tree_cookie.png">`,
			cartQuantity: 0,
			filters: {
				category: ["cookies"],
				colors: ["red", "white", "green", "brown"],
				size: ["small"],
			},
		},
	];

	const faq = [
		{
			id: 1,
			question: "Are the Christmas decorations on your website suitable for both indoor and outdoor use?",
			anwser: "Yes, our Christmas decorations are designed to be used both indoors and outdoors.",
		},
		{
			id: 2,
			question: "How can I place an order on your website?",
			anwser: "Simply browse through our selection of Christmas decorations, add the desired items to your cart, and proceed to checkout.",
		},
		{
			id: 3,
			question: "What payment methods do you accept?",
			anwser: "We accept credit/debit cards, PayPal, and various other secure online payment options.",
		},
		{
			id: 4,
			question: "What is your shipping policy for Christmas decorations?",
			anwser: "We offer worldwide shipping. Please refer to our shipping policy page for detailed information on rates and delivery times.",
		},
		{
			id: 5,
			question: "Do you offer any discounts or promotions during the Christmas season?",
			anwser: "Yes, we often run special promotions and discounts during the Christmas season. Keep an eye on our website for updates.",
		},
		{
			id: 6,
			question: "Can I return or exchange Christmas decorations if I change my mind?",
			anwser: "Yes, we have a hassle-free return policy. Please refer to our returns page for instructions on how to initiate a return.",
		},
		{
			id: 7,
			question: "Are your Christmas decorations made from eco-friendly materials?",
			anwser: "Yes, we prioritize eco-friendly materials in the production of our Christmas decorations whenever possible.",
		},
		{
			id: 8,
			question: "Can I track my package once it has been shipped?",
			anwser: "Yes, we provide tracking information for all shipped orders. You will receive a tracking number via email.",
		},
		{
			id: 9,
			question: "What if the Christmas decorations I receive are damaged or defective?",
			anwser: "In such cases, please contact our customer support within a specified timeframe for assistance in resolving the issue.",
		},
		{
			id: 10,
			question: "How long does it take for the Christmas decorations to arrive?",
			anwser: "Delivery times vary depending on your location and selected shipping method. Please see our shipping policy for estimated times.",
		},
		{
			id: 11,
			question: "Do you offer gift wrapping services?",
			anwser: "Yes, we offer gift wrapping services for an additional fee. You can select this option during the checkout process.",
		},
		{
			id: 12,
			question: "Are the Christmas decorations on your website handmade or mass-produced?",
			anwser: "Some of our Christmas decorations are handmade, while others are mass-produced. Each product listing specifies the details.",
		},
		{
			id: 13,
			question: "Can I cancel my order after it has been placed?",
			anwser: "We allow order cancellations within a certain timeframe before the items are shipped. Please contact our customer support for assistance.",
		},
		{
			id: 14,
			question: "Can I customize or personalize the Christmas decorations?",
			anwser: "We offer customization options for certain products. Please check the product description or contact our customer support for more information.",
		},
		{
			id: 15,
			question: "Are your Christmas decorations child-safe?",
			anwser: "We ensure that our Christmas decorations comply with safety standards and are suitable for use around children. However, adult supervision is always recommended.",
		},
	];
	const paginationMaxNumberOfButtons = 7;
	let paginationProductsPerPage = parseInt(document.querySelector("#products-per-page").value);

	//// header size
	function headerSize() {
		document.documentElement.style.setProperty("--size-block-header", document.querySelector("header").offsetHeight + "px");
	}
	window.addEventListener("resize", headerSize);
	headerSize();

	//// Featured Products
	let output = "";
	products.forEach((product, index) => {
		if (product.isFeatured) {
			output += `<li class="product `;
			if (isNew(product)) output += `new `;
			if (product.oldPrice) output += `discount `;
			output += `"`;
			output += ` data-product-id="${product.id}"`;
			if (product.oldPrice) output += ` data-discount=${Math.round(((product.price - product.oldPrice) / product.oldPrice) * 100)}%`;
			output += `>`;
			output += `<button aria-pressed="`;
			if (index === 0) output += `true`;
			else output += `false`;
			output += `"`;
			if (isNew(product) || product.oldPrice) {
				output += ` title="`;
				if (isNew(product)) output += `new `;
				if (product.oldPrice) output += `-${discountProcent(product)}%`;
				output += `"`;
			}
			output += `>`;
			output += `<div class="image">`;
			output += product.image;
			output += `</div>`;
			output += `</button>`;
			output += `</li>`;
		}
	});
	document.querySelector("#featured ul").insertAdjacentHTML("beforeend", output);
	function stars(rating) {
		const numberOfStars = 5;
		const starEmpty = `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>`;
		const starHalf = `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" stroke-width="0" fill="currentColor" /></svg>`;
		const starFull = `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor" /></svg>`;
		rating = Math.round(rating * 2) / 2;
		let output = "";
		for (let star = 1; star <= numberOfStars; star++) {
			if (rating >= 1) output += starFull;
			else if (rating === 0.5) output += starHalf;
			else output += starEmpty;
			rating -= 1;
		}
		return output;
	}
	function featured(productId) {
		const product = products.find((product) => product.id.toString() === productId);
		const display = document.querySelector("#display > div");
		const sta = display.querySelector(".stars");
		display.setAttribute("data-product-id", productId);
		display.setAttribute("class", "product");
		let price = `$${product.price}`;
		if (isNew(product)) display.classList.add("new");
		if (product.cartQuantity > 0) display.classList.add("in-cart");
		if (product.oldPrice) {
			display.classList.add("discount");
			display.setAttribute("data-discount", "-" + discountProcent(product) + "%");
			price += ` <span class="old">$${product.oldPrice}</span>`;
		} else {
			display.removeAttribute("data-discount");
		}
		display.querySelector(".image").innerHTML = product.image;
		if (isNew(product) || product.oldPrice) {
			let imageTitle = "";
			if (isNew(product)) imageTitle += `new `;
			if (product.oldPrice) imageTitle += `-${discountProcent(product)}%`;
			display.querySelector(".image").setAttribute("title", imageTitle);
		} else display.querySelector(".image").removeAttribute("title");
		display.querySelector("h3").innerHTML = product.name;
		display.querySelector(".price").innerHTML = price;
		sta.setAttribute("title", product.rating + "/5 stars");
		sta.innerHTML = stars(product.rating);
		display.querySelector(".description").innerHTML = product.description;
	}
	const featuredButtons = document.querySelectorAll("#featured nav button");
	featuredButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const button = event.target.closest("button");
			featuredButtons.forEach((b) => {
				if (b === button) b.ariaPressed = "true";
				else b.ariaPressed = "false";
			});
			featured(button.closest("[data-product-id]").getAttribute("data-product-id"));
		});
	});
	featuredButtons[0]?.click();
	document.querySelector("#featured .add-to-cart").addEventListener("click", addToCart);

	//// Products
	function numberOfProductsToDisplay(products) {
		var number = 0;
		products.forEach((product) => {
			if (product.display) number += 1;
		});
		return number;
	}
	function isNew(product) {
		const days = 30; // how long product is new in days
		const date1 = new Date(product.date);
		const date2 = new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000);
		if (date1 >= date2) return true;
		return false;
	}
	function discountProcent(product) {
		if (!product.oldPrice) return 0;
		return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
	}
	function generateProductHtml(product, h) {
		if (!h) h = 3;
		let output = `<li class="product `;
		if (isNew(product)) output += `new `;
		if (product.oldPrice) output += `discount `;
		if (product.cartQuantity > 0) output += `in-cart`;
		output += `"`;
		output += ` data-product-id="${product.id}"`;
		if (product.oldPrice) output += ` data-discount="-${discountProcent(product)}%"`;
		output += `>`;
		output += `<div class="image"`;
		if (isNew(product) || product.oldPrice) {
			output += ` title="`;
			if (isNew(product)) output += `new `;
			if (product.oldPrice) output += `-${discountProcent(product)}%`;
			output += `"`;
		}
		output += `>`;
		output += product.image;
		output += `<button class="add-to-cart"><span>Add to cart</span>
						<svg class="icon" width="23" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M-1 0h24v24H0z" fill="none" />
							<path d="M5.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
							<path d="M8 11v-5a3 3 0 0 1 6 0v5" />
						</svg></button>`;
		output += `</div>`;
		output += `<div class="name-price-description">`;
		output += `<h${h} class="name">${product.name}</h${h}>`;
		output += `<div class="price">$${product.price}`;
		if (product.oldPrice) output += ` <span class="old">$${product.oldPrice}</span>`;
		output += `</div>`;
		output += `<div class="stars" title="${product.rating}/5 stars">`;
		output += stars(product.rating);
		output += `</div>`;
		output += `<div class="description">${product.description}</div>`;
		output += `<button class="add-to-cart"><span>Add to cart</span>
						<svg class="icon" width="23" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M-1 0h24v24H0z" fill="none" />
							<path d="M5.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
							<path d="M8 11v-5a3 3 0 0 1 6 0v5" />
						</svg></button>`;
		output += `</div>`;
		output += `</div>`;
		output += `</li>`;
		return output;
	}
	function displayProducts(products, fromProduct, toProduct) {
		applyFilters(products);
		const productsToDisplay = products.filter((product) => product.display);
		let output = ``;
		for (let i = fromProduct; i <= toProduct; i++) {
			if (productsToDisplay[i - 1]) output += generateProductHtml(productsToDisplay[i - 1]);
		}
		document.querySelector("#shop ul").innerHTML = output;
		document.querySelectorAll("#shop li").forEach((product) => {
			product.addEventListener("animationend", (event) => {
				if (event.target.classList.contains("hiding")) {
					event.target.hidden = true;
					event.target.classList.remove("hiding");
				}
			});
		});
		document.querySelectorAll("#shop .add-to-cart").forEach((button) => {
			button.addEventListener("click", addToCart);
		});
		document.querySelector(".pagination").innerHTML = generatePaginationHtml(numberOfProductsToDisplay(products), paginationProductsPerPage);
		addPaginationButtonsEventListeners();
	}

	//// promo cards
	document.querySelector(".to-products").addEventListener("click", () => {
		scrollToElement(document.querySelector("#shop .products-options"));
	});
	document.querySelector(".open-giftcard-modal").addEventListener("click", () => {
		document.querySelector("#giftcard").showModal();
	});

	//// products display
	const displayButtons = document.querySelectorAll(".products-display-buttons button");
	displayButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const button = event.target.closest("button");
			event.target
				.closest(".products-display-buttons")
				.querySelectorAll("button")
				.forEach((b) => {
					if (b === button) b.ariaPressed = "true";
					else b.ariaPressed = "false";
				});
			let productsDom = event.target.closest(".products-options").nextElementSibling;
			if (!productsDom.classList.contains("products")) productsDom = productsDom.querySelector(".products");
			productsDom.classList.remove("list", "grid", "details");
			productsDom.classList.add(button.getAttribute("class"));
		});
	});

	//// filters

	// return true if there is at least one common element in two arrays
	function findCommonElements(arr1, arr2) {
		return arr1.some((item) => arr2.includes(item));
	}

	// show / hide filters
	document.querySelectorAll("#filters button").forEach((button) => {
		button.addEventListener("click", () => {
			const filtersDom = document.querySelector("#filters");
			if (filtersDom.ariaExpanded === "true") filtersDom.ariaExpanded = "false";
			else filtersDom.ariaExpanded = "true";
		});
	});

	// generate list of all filters based on products object
	var filters = {};
	products.forEach((product) => {
		for (const [key, values] of Object.entries(product.filters)) {
			if (!filters[key]) filters[key] = [];
			values.forEach((value) => {
				if (!filters[key].includes(value)) filters[key].push(value);
			});
		}
	});

	// generate filters form from filters object
	output = ``;
	for (const [key, values] of Object.entries(filters)) {
		output += `<fieldset><legend>${key}</legend>`;
		values.forEach((value) => {
			output += `<label><input type="checkbox" name="filter-${key}" value="${value}"><span>${value}</span></label>`;
		});
		output += `</fieldset>`;
	}
	document.querySelector("#filters form").insertAdjacentHTML("beforeend", output);

	// change in filters form
	function applyFilters(products) {
		const formData = new FormData(document.querySelector("#filters form"));

		// generate list of selected filters based on filters form
		var selectedFilters = {};
		for (let [key, value] of formData.entries()) {
			key = key.split("-")[1];
			if (!selectedFilters[key]) selectedFilters[key] = [];
			selectedFilters[key].push(value);
		}

		// if any filter selected
		if (Object.keys(selectedFilters).length > 0) {
			// iterate all products
			products.forEach((product) => {
				if (!product.isHidden) {
					// show product
					product.display = true;
					// iterate every filter type in selected filters object
					for (const [key, values] of Object.entries(selectedFilters)) {
						// hide product if no common value for current filter type (product vs selected filters)
						if (!findCommonElements(product.filters[key], values)) product.display = false;
					}
				} else product.display = false;
			});
			// no filters selected -> show all products
		} else {
			products.forEach((product) => {
				product.display = !product.isHidden;
			});
		}
	}
	document.querySelector("#filters form").addEventListener("change", () => {
		displayProducts(products, 1, paginationProductsPerPage);
	});

	//// sortby
	function sortProducts(products, by) {
		switch (by) {
			case "recent":
				products.sort((a, b) => new Date(b.date) - new Date(a.date));
				break;
			case "recommended":
				products.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
				break;
			case "popular":
				products.sort((a, b) => parseFloat(b.soldInLast30Days) - parseFloat(a.soldInLast30Days));
				break;
			case "price-asc":
				products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
				break;
			case "price-desc":
				products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
				break;
			case "sales":
				products.sort((a, b) => parseFloat(discountProcent(b)) - parseFloat(discountProcent(a)));
				break;
			case "name":
				products.sort((a, b) => a.name.localeCompare(b.name));
				break;
			default:
		}
		displayProducts(products, 1, paginationProductsPerPage);
	}
	document.querySelector("#sortby").addEventListener("change", (event) => sortProducts(products, event.target.value));
	sortProducts(products, document.querySelector("#sortby").value);

	//// pagination
	function generatePaginationHtml(numberOfProducts, productsPerPage, currentPage) {
		if (!currentPage) currentPage = 1;
		const previousPageIcon = `<svg class="icon" width="23" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6l6 6" /></svg>`;
		const nextPageIcon = `<svg class="icon" width="23" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6l-6 6" /></svg>`;
		const ellipsis = "…";
		const numberOfPages = Math.ceil(numberOfProducts / productsPerPage);
		const maxNumberOfButtons = paginationMaxNumberOfButtons;
		let numberOfButtons = numberOfPages;
		if (numberOfPages > maxNumberOfButtons) numberOfButtons = maxNumberOfButtons;
		if (numberOfPages === 1 || numberOfProducts === 0) return "";
		function isEllipsis(buttonNumber) {
			if (numberOfButtons >= numberOfPages) return false;
			if (buttonNumber === 2 && currentPage > Math.ceil(numberOfButtons / 2)) return true;
			if (buttonNumber === numberOfButtons - 1 && currentPage <= numberOfPages - Math.ceil(numberOfButtons / 2)) return true;
			return false;
		}
		function buttonValue(buttonNumber) {
			if (currentPage < Math.ceil(numberOfButtons / 2)) return buttonNumber;
			if (currentPage >= numberOfPages - Math.ceil(numberOfButtons / 2) + 1) return numberOfPages - numberOfButtons + buttonNumber;
			return currentPage - Math.ceil(numberOfButtons / 2) + buttonNumber;
		}
		let paginationHtml = `<button class="previous"`;
		if (currentPage === 1) paginationHtml += ` disabled`;
		paginationHtml += `><span class="sr-only">Previous page</span>${previousPageIcon}</button><div>`;
		paginationHtml += `<button aria-pressed="`;
		if (currentPage === 1) paginationHtml += `true`;
		else paginationHtml += `false`;
		paginationHtml += `">1</button>`;
		for (let i = 2; i <= numberOfButtons - 1; i++) {
			paginationHtml += `<button`;
			if (isEllipsis(i)) paginationHtml += ` class="ellipsis"`;
			paginationHtml += ` aria-pressed="`;
			if (currentPage === buttonValue(i)) paginationHtml += `true`;
			else paginationHtml += `false`;
			paginationHtml += `"`;
			if (isEllipsis(i)) paginationHtml += ` disabled`;
			paginationHtml += `>`;
			if (isEllipsis(i)) paginationHtml += ellipsis;
			else paginationHtml += buttonValue(i);
			paginationHtml += `</button>`;
		}
		paginationHtml += `<button aria-pressed="`;
		if (currentPage === numberOfPages) paginationHtml += `true`;
		else paginationHtml += `false`;
		paginationHtml += `">${numberOfPages}</button>`;
		paginationHtml += `</div><button class="next"`;
		if (currentPage === numberOfPages) paginationHtml += ` disabled`;
		paginationHtml += `><span class="sr-only">Next page</span>${nextPageIcon}</button>`;
		return paginationHtml;
	}
	function paginationGoToPage(pageNumber) {
		const fromProduct = pageNumber * paginationProductsPerPage - paginationProductsPerPage + 1;
		const toProduct = fromProduct + parseInt(paginationProductsPerPage) - 1;
		displayProducts(products, fromProduct, toProduct);
		document.querySelector(".pagination").innerHTML = generatePaginationHtml(products.filter((product) => product.display).length, paginationProductsPerPage, pageNumber);
		addPaginationButtonsEventListeners();
	}
	function addPaginationButtonsEventListeners() {
		let currentPage = parseInt(document.querySelector(`.pagination button[aria-pressed="true"]`)?.innerHTML);
		document.querySelectorAll(".pagination button").forEach((button) => {
			if (button.classList.contains("previous") && !button.disabled) {
				button.addEventListener("click", (event) => {
					paginationGoToPage(currentPage - 1);
				});
			} else if (button.classList.contains("next") && !button.disabled) {
				button.addEventListener("click", (event) => {
					paginationGoToPage(currentPage + 1);
				});
			} else {
				button.addEventListener("click", (event) => {
					const pageNumber = parseInt(event.target.closest("button").innerHTML);
					paginationGoToPage(pageNumber);
				});
			}
		});
	}

	//// cart

	document.querySelector(".cart-button").addEventListener("click", () => {
		const cartDom = document.querySelector("#cart");
		if (cartDom.ariaExpanded === "true") cartDom.ariaExpanded = "false";
		else cartDom.ariaExpanded = "true";
	});

	document.querySelector("#cart .close-button").addEventListener("click", () => {
		document.querySelector("#cart").ariaExpanded = "false";
	});

	function addToCart(event) {
		event.target.closest("button").blur();
		const productId = event.target.closest("[data-product-id]").getAttribute("data-product-id");
		const image = event.target.closest("[data-product-id]").querySelector(".image");
		const imageCopy = image.cloneNode(true);
		imageCopy.querySelector("button")?.remove();
		imageCopy.addEventListener("animationend", () => {
			products.find((product) => product.id.toString() === productId).cartQuantity += 1;
			recalculateCart();
			imageCopy.remove();
		});
		const cartButton = document.querySelector(".cart-button");
		const imageViewportOffset = image.getBoundingClientRect();
		const cartButtonViewportOffset = cartButton.getBoundingClientRect();
		imageCopy.style.setProperty("position", "fixed");
		imageCopy.style.setProperty("top", "-" + imageViewportOffset.height / 2 + "px");
		imageCopy.style.setProperty("left", "-" + imageViewportOffset.width / 2 + "px");
		imageCopy.style.setProperty("z-index", "99999");
		imageCopy.style.setProperty("width", imageViewportOffset.width + "px");
		imageCopy.style.setProperty("height", imageViewportOffset.height + "px");
		imageCopy.style.setProperty("--position-start", imageViewportOffset.x + imageViewportOffset.width / 2 + "px, " + (imageViewportOffset.y + imageViewportOffset.height / 2) + "px");
		imageCopy.style.setProperty("--position-end", cartButtonViewportOffset.x + cartButtonViewportOffset.width / 2 + "px, " + (cartButtonViewportOffset.y + cartButtonViewportOffset.height / 2) + "px");
		imageCopy.style.setProperty("--delta-scale", (cartButtonViewportOffset.width / imageViewportOffset.width).toFixed(2));
		imageCopy.style.setProperty("box-shadow", "var(--shadow-1)");
		imageCopy.style.setProperty("animation", "var(--transition-speed-slow) var(--transition-timing-function-default) 0s backwards add-to-cart");
		image.parentNode.insertBefore(imageCopy, image.nextSibling);
	}
	function recalculateCart() {
		let quantity = 0;
		let subtotal = 0;
		products.forEach((product) => {
			const productDom = document.querySelector(`#cart [data-product-id="${product.id}"]`);
			if (product.cartQuantity > 0) {
				if (product.cartQuantity > 99) product.cartQuantity = 99;
				quantity += product.cartQuantity;
				subtotal += product.cartQuantity * product.price;
				document.querySelectorAll(`[data-product-id="${product.id}"]`).forEach((product) => {
					product.classList.add("in-cart");
				});
				// product already in cart
				if (productDom) {
					productDom.querySelector("input").value = product.cartQuantity;
					productDom.querySelector(".quantity").innerHTML = product.cartQuantity;
					productDom.querySelector(".product-subtotal").innerHTML = (product.cartQuantity * product.price).toFixed(2);
				} else {
					output = `<li data-product-id="${product.id}">`;
					output += `<div class="image">`;
					output += product.image;
					output += `</div>`;
					output += `<div class="name-price-quantity">`;
					output += `<h3>${product.name}</h3>`;
					output += `<div class="price"><div><span class="quantity">${product.cartQuantity}</span> × $${product.price}</div><div>$<span class="product-subtotal">${product.cartQuantity * product.price}</span></div></div>`;
					output += `<fieldset>`;
					output += `<button>-</button>`;
					output += `<input type="number" min="0" max="99" step="1" value="${product.cartQuantity}">`;
					output += `<button>+</button>`;
					output += `</fieldset>`;
					output += `</div>`;
					output += `</li>`;
					document.querySelector("#cart ul").insertAdjacentHTML("beforeend", output);
					document.querySelector(`#cart [data-product-id="${product.id}"] input`).addEventListener("change", (event) => {
						const productId = event.target.closest("[data-product-id]").getAttribute("data-product-id");
						products.find((product) => product.id.toString() === productId).cartQuantity = parseInt(event.target.value);
						recalculateCart();
					});
					document.querySelectorAll(`#cart [data-product-id="${product.id}"] button`).forEach((button) => {
						button.addEventListener("click", (event) => {
							const productId = event.target.closest("[data-product-id]").getAttribute("data-product-id");
							if (event.target.closest("button").innerHTML === "-") {
								products.find((product) => product.id.toString() === productId).cartQuantity -= 1;
							} else {
								products.find((product) => product.id.toString() === productId).cartQuantity += 1;
							}
							recalculateCart();
						});
					});
				}
			} else {
				document.querySelectorAll(`[data-product-id="${product.id}"]`).forEach((product) => {
					product.classList.remove("in-cart");
				});
				if (productDom) {
					productDom.remove();
				}
			}
		});
		// update cart button
		document.querySelector("header nav .cart-quantity").innerHTML = quantity;
		// update subtotal
		document.querySelector("#cart dd").innerHTML = `$${subtotal.toFixed(2)}`;
		// enable/disable checkout button
		if (quantity < 1) document.querySelector(".checkout-button").setAttribute("disabled", "");
		else document.querySelector(".checkout-button").removeAttribute("disabled");
	}
	recalculateCart();

	//// giftcard
	function giftcardDolarValue(string) {
		const minValue = 5;
		const maxValue = 1000;
		const defaultValue = 25;
		let number = parseInt(string.match(/\d+/));
		if (isNaN(number)) number = defaultValue;
		if (number < minValue) number = minValue;
		if (number > maxValue) number = maxValue;
		return number;
	}
	const giftcardValueInput = document.querySelector("#giftcard-value-input");
	giftcardValueInput.addEventListener("change", (event) => {
		giftcardValueInput.value = "$" + giftcardDolarValue(giftcardValueInput.value);
		document.querySelectorAll("#giftcard-options button").forEach((button) => {
			if (giftcardValueInput.value === button.value) button.ariaPressed = "true";
			else button.ariaPressed = "false";
		});
	});
	document.querySelectorAll("#giftcard-value button").forEach((button) => {
		button.addEventListener("click", (event) => {
			if (event.target.closest("button").innerHTML === "-") {
				giftcardValueInput.value = "$" + (giftcardDolarValue(giftcardValueInput.value) - 1);
			} else {
				giftcardValueInput.value = "$" + (giftcardDolarValue(giftcardValueInput.value) + 1);
			}
			giftcardValueInput.dispatchEvent(new Event("change"));
		});
	});
	document.querySelectorAll("#giftcard-options button").forEach((button) => {
		button.addEventListener("click", (event) => {
			giftcardValueInput.value = button.closest("button").value;
			giftcardValueInput.dispatchEvent(new Event("change"));
		});
	});
	document.querySelector("#giftcard form").addEventListener("submit", (event) => {
		event.preventDefault();
		let productId = "99" + giftcardDolarValue(giftcardValueInput.value).toString().padStart(6, "0");
		let product = products.find((product) => product.id === productId);
		if (product) {
			products.find((product) => product.id.toString() === productId).cartQuantity += 1;
		} else {
			product = {
				id: productId,
				name: `$${giftcardDolarValue(giftcardValueInput.value)} Gift Card`,
				price: giftcardDolarValue(giftcardValueInput.value),
				image: `<img src="https://icodethis.com/images/iCodeMas/gift.png">`,
				cartQuantity: 1,
				isHidden: true,
			};
			products.push(product);
		}
		recalculateCart();
		event.target.closest("dialog").classList.add("hiding");
	});

	/// FAQ
	function getFaqHtml(question, open) {
		let openHtml = "";
		if (open) openHtml = " open";
		return `<li>
			<details${openHtml}>
			<summary>
			<div>${question.question}</div>
		  <svg class="icon" width="24" height="24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6l-12 12"></path>
					<path d="M6 6l12 12"></path>
			</svg>
			</summary>
			<div><div>${question.anwser}</div></div>
			</details>
			</li>`;
	}
	output = ``;
	faq.forEach((question) => {
		output += getFaqHtml(question);
	});
	document.querySelector("#faq ul").innerHTML = output;

	document.querySelectorAll(".to-close").forEach((dialog) => {
		// hide .hiding element after animation ends
		dialog.addEventListener("animationend", (event) => {
			if (event.target.classList.contains("hiding")) {
				event.target.hidden = true;
				event.target.classList.remove("hiding");
				headerSize();
			}
		});
	});

	//// search
	const resultsDom = document.querySelector("#results");

	function openSearch() {
		// close cart
		document.querySelector("#cart").ariaExpanded = "false";
		document.querySelectorAll("section").forEach((section) => {
			section.hidden = true;
		});
		resultsDom.hidden = false;
		scrollToElement(resultsDom);
	}

	function closeSearch() {
		document.querySelectorAll("section").forEach((section) => {
			section.hidden = false;
		});
		resultsDom.hidden = true;
		document.querySelector("#search").value = "";
	}

	document.querySelector(".search-close-button").addEventListener("click", closeSearch);

	function search(query) {
		let results = {
			products: [],
			faq: [],
		};
		let regexp = new RegExp(query, "g");
		let count = 0;

		products.forEach((product) => {
			if (!product.isHidden) {
				let w = 0;

				// Product name
				count = (product.name.toLowerCase().match(regexp) || []).length;
				if (count > 0) w += 5;

				// Product description
				count = (product.description.toLowerCase().match(regexp) || []).length;
				if (count > 0) w += 3;

				// Product filters
				let filters = "";
				for (let [key, value] of Object.entries(product.filters)) {
					filters += value.join(" ") + " ";
				}
				count = (filters.trim().toLowerCase().match(regexp) || []).length;
				if (count > 0) w += 2;

				if (w > 0) {
					results.products.push({
						id: product.id,
						w: w,
					});
				}
			}
		});
		faq.forEach((question) => {
			count = ((question.question + " " + question.anwser).toLowerCase().match(regexp) || []).length;
			if (count > 0) {
				results.faq.push({
					id: question.id,
					w: count,
				});
			}
		});
		results.products.sort((a, b) => parseFloat(b.w) - parseFloat(a.w));
		results.faq.sort((a, b) => parseFloat(b.w) - parseFloat(a.w));

		document.querySelector("#results h2 span").innerHTML = query;

		if (results.products.length === 1) document.querySelector("#results .products-header").innerHTML = `1 Product found`;
		else document.querySelector("#results .products-header").innerHTML = `${results.products.length} Products found`;

		if (results.faq.length === 1) document.querySelector("#results .faq-header").innerHTML = `1 FAQ found`;
		else document.querySelector("#results .faq-header").innerHTML = `${results.faq.length} FAQ found`;

		output = ``;
		results.products.forEach((p) => {
			output += generateProductHtml(
				products.find((product) => product.id === p.id),
				4
			);
		});
		document.querySelector("#results .products").innerHTML = output;
		document.querySelectorAll("#results .add-to-cart").forEach((button) => {
			button.addEventListener("click", addToCart);
		});

		output = ``;
		results.faq.forEach((q) => {
			output += getFaqHtml(
				faq.find((question) => question.id === q.id),
				true
			);
		});
		document.querySelector("#results .faq").innerHTML = output;

		openSearch();
	}

	document.querySelector(".search").addEventListener("submit", (event) => {
		event.preventDefault();
		let query = event.target.querySelector("#search").value.trim().toLowerCase();
		search(query);
	});
	document.querySelector("#search").addEventListener("input", (event) => {
		let query = event.target.value.trim().toLowerCase();
		search(query);
	});

	//// chat
	const chatDom = document.querySelector("#chat");
	chatDom.addEventListener("animationend", (event) => {
		if (event.target.classList.contains("hiding")) {
			event.target.ariaExpanded = "false";
			event.target.classList.remove("hiding");
		}
	});

	document.querySelectorAll(".chat-open-button, .chat .close-button").forEach((button) => {
		button.addEventListener("click", () => {
			if (chatDom.ariaExpanded === "true") chatDom.classList.add("hiding");
			else {
				chatUpdateTime();
				chatDom.ariaExpanded = "true";
				chatDom.querySelector("input").focus();
			}
		});
	});

	const users = [
		{
			id: 1,
			name: "Me",
			avatar: ``,
			color: "",
		},
		{
			id: 2,
			name: "Santa Klaus",
			avatar: `<img width="64" height="64" src="https://icodethis.com/images/iCodeMas/tiny_santa.png" alt="Santa Klaus avatar">`,
			color: "",
		},
	];
	let now = new Date();
	const messages = [
		{
			user: 2,
			date: new Date(now.getTime() - (0 * 60 + 2) * 1000).toISOString(),
			message: "Hi there, my child!",
		},
		{
			user: 2,
			date: new Date(now.getTime() - (0 * 60 + 1) * 1000).toISOString(),
			message: "What can I help you with?",
		},
	];
	const santaAnwsers = ["Ho ho ho! Merry Christmas to all!", "Have you been naughty or nice this year?", "What is on your Christmas wish list?", "I'm packing my sleigh and getting ready to deliver presents.", "May your Christmas be filled with love and joy.", "Remember, the true meaning of Christmas is spreading kindness and goodwill.", "I'm checking my list twice to make sure I don't forget anyone.", "Let's decorate the Christmas tree and make it sparkle.", "The elves have been working tirelessly to make toys for all the children.", "It's cold at the North Pole, but I stay warm with hot cocoa and cookies."];
	let waitingForResponse = false;
	function ago(date) {
		var seconds = Math.floor((new Date() - date) / 1000);
		var interval = Math.floor(seconds / 31536000);

		if (interval === 1) {
			return interval + " year ago";
		}
		if (interval > 1) {
			return interval + " years ago";
		}

		interval = Math.floor(seconds / 2592000);
		if (interval === 1) {
			return interval + " month ago";
		}
		if (interval > 1) {
			return interval + " months ago";
		}

		interval = Math.floor(seconds / 86400);
		if (interval === 1) {
			return interval + " day ago";
		}
		if (interval > 1) {
			return interval + " days ago";
		}

		interval = Math.floor(seconds / 3600);
		if (interval === 1) {
			return interval + " hour ago";
		}
		if (interval > 1) {
			return interval + " hours ago";
		}

		interval = Math.floor(seconds / 60);
		if (interval === 1) {
			return interval + " minute ago";
		}
		if (interval > 1) {
			return interval + " minutes ago";
		}

		return Math.floor(seconds) + " seconds ago";
	}
	function chatLoadMessages(chat, messages) {
		messages.forEach((message) => {
			const user = users.find((user) => user.id === message.user);
			chatNewMessage(chat, user, message.message, new Date(message.date));
		});
		chat.classList.add("intro");
		chatUpdateTime();
	}
	chatLoadMessages(chatDom, messages);
	function chatUpdateTime() {
		document.querySelectorAll(".chat .avatar-messages-group").forEach((group) => {
			const user = users.find((user) => user.id === parseInt(group.getAttribute("data-user-id")));
			const date = new Date(group.querySelector(".messages p[data-datetime]:last-of-type").getAttribute("data-datetime"));
			const when = group.querySelector(".messages small.when");
			// if last message older then 1 minute
			if (new Date().getTime() - date.getTime() > 60000) {
				if (when) {
					group.querySelector(".messages").appendChild(when);
					when.innerHTML = `${user.name}, ${ago(date)}`;
				} else group.querySelector(".messages").insertAdjacentHTML("beforeend", `<small class="when">${user.name}, <time datetime="${date.toISOString}">${ago(date)}</time></small>`);
			}
		});
	}
	function chatNewMessage(chat, user, message, date) {
		if (!date) date = new Date();
		const allMessages = chat.closest(".chat").querySelector(".all-messages");
		if (parseInt(allMessages.querySelector(".avatar-messages-group:last-of-type")?.getAttribute("data-user-id")) === user.id) {
			allMessages.querySelector(".avatar-messages-group:last-of-type .messages").insertAdjacentHTML("beforeend", `<p data-datetime="${date.toISOString()}">${message}</p>`);
		} else {
			allMessages.insertAdjacentHTML(
				"beforeend",
				`<div data-user-id="${user.id}" class="avatar-messages-group">
					<div class="avatar">${user.avatar}</div>
					<div class="messages">
						<p data-datetime="${date.toISOString()}">${message}</p>
					</div>
				</div>`
			);
		}
		chat.closest(".chat").classList.remove("intro");
		allMessages.scrollTop = allMessages.scrollHeight;
	}
	document.querySelector(".new-message").addEventListener("submit", (event) => {
		event.preventDefault();
		const newMessage = event.target.querySelector("input").value.trim();
		if (newMessage !== "") {
			chatNewMessage(event.target, users[0], newMessage);
			event.target.querySelector("input").value = "";
			if (!waitingForResponse) {
				setTimeout(() => {
					chatNewMessage(event.target, users[1], santaAnwsers[Math.floor(Math.random() * santaAnwsers.length)]);
					waitingForResponse = false;
				}, 2000);
			}
			waitingForResponse = true;
		}
	});
	// update "ago" messages every minut
	const chatUpdateTimeInterval = setInterval(chatUpdateTime, 60000);

	//// checkout
	document.querySelector(".checkout-button").addEventListener("click", () => {
		document.querySelector("#checkout").showModal();
	});
	document.querySelectorAll("#checkout .payment-method input").forEach((input) => {
		input.addEventListener("change", (event) => {
			const paymentMethod = event.target.closest("input").value;
			document.querySelectorAll("#checkout .details").forEach((fieldset) => {
				fieldset.hidden = true;
				fieldset.setAttribute("disabled", "");
			});
			document.querySelector(`#${paymentMethod}-details`)?.removeAttribute("hidden");
			document.querySelector(`#${paymentMethod}-details`)?.removeAttribute("disabled");
		});
	});
	document.querySelector("#checkout form").addEventListener("submit", (event) => {
		event.preventDefault();
		products.forEach((product) => (product.cartQuantity = 0));
		recalculateCart();
		document.querySelector("#checkout").classList.add("hiding");
		document.querySelector("#thankyou").showModal();
		const confettiColors = [getComputedStyle(document.documentElement).getPropertyValue("--color-accent-1"), getComputedStyle(document.documentElement).getPropertyValue("--color-accent-2")];
		const canvas = document.querySelector("#thankyou canvas");
		const jsConfetti = new JSConfetti({ canvas });
		jsConfetti.addConfetti({ confettiRadius: 20, confettiColors: confettiColors });
	});

	//// thank you
	document.querySelector("#thankyou .feedback-section button").addEventListener("click", () => {
		document.querySelector("#thankyou").classList.add("hiding");
		document.querySelector("#feedback").showModal();
	});

	//// feedback
	document.querySelector("#feedback form").addEventListener("submit", (event) => {
		event.preventDefault();
		document.querySelector("#feedback").classList.add("hiding");
		document.querySelector("#thankyou-feedback").showModal();
	});

	//// newsletter
	document.querySelector("#newsletter form").addEventListener("submit", (event) => {
		event.preventDefault();
		document.querySelector("#thankyou-newsletter").showModal();
	});

	//// footer
	output = ``;
	filters.category.forEach((category) => {
		output += `<li><a href="#category-${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</a></li>`;
	});
	document.querySelector("#footer .product-categories").innerHTML = output;

	//// archon links
	function getOffset(element) {
		const rect = element.getBoundingClientRect();
		return {
			left: rect.left + window.scrollX,
			top: rect.top + window.scrollY,
		};
	}
	function scrollToElement(element) {
		window.scrollTo({
			top: getOffset(element).top - document.querySelector("header").offsetHeight - 16,
			behavior: "smooth",
		});
	}
	document.querySelectorAll('a[href^="#"]').forEach((a) => {
		a.addEventListener("click", (event) => {
			event.preventDefault();
			const hash = event.target.closest("a")?.href.split("#")[1];
			closeSearch();
			if (hash.startsWith("category-")) {
				const category = hash.split("-")[1];
				if (filters.category.includes(category)) {
					document.querySelector("#filters").ariaExpanded = true;
					document.querySelector("#filters form").reset();
					document.querySelector(`#filters input[name="filter-category"][value="${category}"]`).checked = true;
					//applyFilters(products);
					displayProducts(products, 1, paginationProductsPerPage);
					scrollToElement(document.querySelector("#shop .products-options"));
				} else console.log(`Category "${category}" does not exist`);
			} else {
				const element = document.querySelector("#" + hash);
				if (element) scrollToElement(element);
			}
		});
	});

	//// modals
	document.querySelectorAll("dialog").forEach((dialog) => {
		// close .hiding dialog after animation ends
		dialog.addEventListener("animationend", (event) => {
			if (event.target.classList.contains("hiding")) {
				event.target.close();
				event.target.classList.remove("hiding");
			}
		});
		// add .hiding class when clicked on modal backdrop
		dialog.addEventListener("click", (event) => {
			const dialog = event.target.closest("dialog");
			const rect = dialog.getBoundingClientRect();
			const isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
			if (!isInDialog && event.target.tagName === "DIALOG") {
				dialog.classList.add("hiding");
			}
		});
	});

	/// close buttons
	const closeButtons = document.querySelectorAll("dialog .close-button, .to-close .close-button");
	closeButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.preventDefault();
			event.target.closest("button").blur();
			event.target.closest("dialog")?.classList.add("hiding") || event.target.closest(".to-close")?.classList.add("hiding");
		});
	});

	//// settings
	const settingsModal = document.querySelector("#settings-modal");

	/// open settings modal
	const settingsOpenButtonHtml = `
	  <button class="settings-open-button">
			<svg class="icon" width="24" height="24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
				<path d="M6 4v4"></path>
				<path d="M6 12v8"></path>
				<path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
				<path d="M12 4v10"></path>
				<path d="M12 18v2"></path>
				<path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
				<path d="M18 4v1"></path>
				<path d="M18 9v11"></path>
			</svg>
			<span>settings</span>
		</button>`;
	document.body.insertAdjacentHTML("beforeend", settingsOpenButtonHtml);
	const settingsOpenButtons = document.querySelectorAll(".settings-open-button");
	settingsOpenButtons.forEach((button) => {
		button.addEventListener("click", () => {
			settingsModal.showModal();
		});
	});
	/// products per page
	document.querySelector("#products-per-page").addEventListener("change", (event) => {
		paginationProductsPerPage = parseInt(event.target.value);
		displayProducts(products, 1, paginationProductsPerPage);
	});

	/// dark mode
	const settingsDarkmode = document.querySelector("#settings-darkmode");
	if (document.documentElement.getAttribute("data-theme") === "dark") settingsDarkmode.checked = true;
	else settingsDarkmode.checked = false;
	settingsDarkmode.addEventListener("change", () => {
		if (settingsDarkmode.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
		}
	});

	/// accent color
	const settingsHue = document.querySelector("#settings-hue");
	settingsHue.value = getComputedStyle(document.documentElement).getPropertyValue("--color-accent-1-h");
	settingsHue.addEventListener("input", () => {
		document.documentElement.style.setProperty("--color-accent-1-h", settingsHue.value);
	});

	//// thumbnail hack
	if (navigator.userAgent.includes("Headless")) {
		document.documentElement.style.setProperty("--transition-speed-fast", "0s");
		document.documentElement.style.setProperty("--transition-speed-medium", "0s");
		document.documentElement.style.setProperty("--transition-speed-slow", "0s");
		//const workInProgress = `<span style="position: absolute; inset-inline: 0; inset-block-end: 152px; inline-size: 100%; color: #fff; background-color: #2c2446; font-size: 3rem; font-weight: bold; text-align: center; padding: 0.5rem;">Work in progress…<span>`;
		//document.body.insertAdjacentHTML("beforeend", workInProgress);
		document.body.style.setProperty("padding-block-end", "0");
		document.body.style.setProperty("margin-block-start", "152px");
		document.body.style.setProperty("min-block-size", "0");
		document.body.style.setProperty("block-size", "calc(100vh - 304px)");
		document.body.style.setProperty("position", "relative");
    }
    scrollToElement(document.querySelector("#newsletter"));
});
