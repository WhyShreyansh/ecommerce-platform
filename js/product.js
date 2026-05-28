const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const product = products.find(p => p.id === id);

const div = document.getElementById("product-details");
div.innerHTML = `
  <h2>${product.name}</h2>
  <p>${product.desc}</p>
  <p>₹${product.price}</p>
  <button onclick="add()">Add to Cart</button>
`;

function add() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
