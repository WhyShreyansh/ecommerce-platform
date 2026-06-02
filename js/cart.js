const cartItems = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    ${item.name} - ₹${item.price}
    <button onclick="removeItem(${index})">Remove</button>
  `;
  cartItems.appendChild(li);
  total += item.price;
});

totalSpan.textContent = total;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
