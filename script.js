
// console.log("E-commerce platform loaded successfully");


// Day 2: Product listing functionality

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2999
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1499
    }
];

const productList = document.getElementById("product-list");

function displayProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button>Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });
}

displayProducts();
