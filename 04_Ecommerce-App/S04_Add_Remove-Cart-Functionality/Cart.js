const cartBody = document.getElementById("cart-body");

function renderCartItems() {
  cartBody.innerHTML = ""; // Clear previous content

  JSON.parse(localStorage.getItem("carts")).forEach((item, index) => {
    const cartRow = document.createElement("div");
    cartRow.className = "cart-item";
    cartRow.dataset.price = item.price;
    cartRow.dataset.index = index;

    cartRow.innerHTML = `
          <div class="cart-column image"><img src="${item.image}" alt="${
      item.name
    }" /></div>
          <div class="cart-column name">${item.name}</div>
          <div class="cart-column price">$${item.price.toFixed(2)}</div>
          <div class="cart-column quantity">
            <input type="number" min="1" value="${
              item.quantity || 1
            }" class="quantity-input"/>
          </div>
          <div class="cart-column remove">
            <span class="remove-icon" title="Remove item">&#10005;</span>
          </div>
        `;

    cartBody.appendChild(cartRow);
  });

  attachEventListeners();
  updateTotal();
}

function updateTotal() {
  const rows = document.querySelectorAll(".cart-item");
  let total = 0;

  rows.forEach((row) => {
    const price = parseFloat(row.dataset.price);
    const qty = parseInt(row.querySelector(".quantity-input").value);
    total += price * qty;
  });

  document.getElementById("total-price").textContent = total.toFixed(2);
}

function attachEventListeners() {
  // Quantity change
  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("input", updateTotal);
  });

  // Remove icon
  document.querySelectorAll(".remove-icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      const row = this.closest(".cart-item");
      const index = parseInt(row.dataset.index);
      var carts = JSON.parse(localStorage.getItem("carts"));
      carts.splice(index, 1); // Remove from array

      localStorage.setItem("carts", JSON.stringify(carts));
      renderCartItems(); // Re-render
    });
  });
}

// Initial render
renderCartItems();
