const list = document.getElementById("product-list");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <a href="product.html?id=${p.id}">View</a>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  list.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}
updateCartCount();

