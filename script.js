
// // console.log("E-commerce platform loaded successfully");


// // Day 2: Product listing functionality

// const products = [
//     {
//         id: 1,
//         name: "Wireless Headphones",
//         price: 1999
//     },
//     {
//         id: 2,
//         name: "Smart Watch",
//         price: 2999
//     },
//     {
//         id: 3,
//         name: "Bluetooth Speaker",
//         price: 1499
//     }
// ];

// const productList = document.getElementById("product-list");

// function displayProducts() {
//     productList.innerHTML = "";

//     products.forEach(product => {
//         const productDiv = document.createElement("div");
//         productDiv.className = "product";

//         productDiv.innerHTML = `
//             <h3>${product.name}</h3>
//             <p>Price: ₹${product.price}</p>
//             <button>Add to Cart</button>
//         `;

//         productList.appendChild(productDiv);
//     });
// }

// displayProducts();


const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1518441902113-c1b5e8a7f7aa"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2999,
        image: "https://images.unsplash.com/photo-1511732351155-1865efcb7b7f"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        id: 4,
        name: "Laptop",
        price: 54999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

displayProducts();
updateCartCount();
