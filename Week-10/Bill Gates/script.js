// Initial balance and product list
let balance = 100000000000; // $100 billion
const products = [
  { name: "Flying Car", price: 50000000, quantity: 0 }, // Price in $ (50 million)
  { name: "Private Island", price: 200000000, quantity: 0 }, // 200 million
  { name: "Super Yacht", price: 300000000, quantity: 0 }, // 300 million
  { name: "Diamond Necklace", price: 10000000, quantity: 0 }, // 10 million
  { name: "Space Trip", price: 200000000, quantity: 0 }, // 200 million
];

// Update balance display
function updateBalance() {
  document.getElementById("balance-amount").textContent =
    balance.toLocaleString();
}

// Create product elements dynamically
function renderProducts() {
  const productsList = document.getElementById("products-list");
  productsList.innerHTML = ""; // Clear previous product list

  products.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.name;
    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price.toLocaleString()}`;

    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    buyButton.disabled = product.price > balance; // Disable if price is higher than balance
    buyButton.addEventListener("click", () => buyProduct(index));

    const sellButton = document.createElement("button");
    sellButton.textContent = "Sell";
    sellButton.disabled = product.quantity === 0; // Disable if no product purchased
    sellButton.addEventListener("click", () => sellProduct(index));

    productElement.appendChild(productTitle);
    productElement.appendChild(productPrice);
    productElement.appendChild(buyButton);
    productElement.appendChild(sellButton);

    productsList.appendChild(productElement);
  });
}

// Buy a product
function buyProduct(index) {
  const product = products[index];
  if (product.price <= balance) {
    balance -= product.price;
    product.quantity++;
    updateBalance();
    renderProducts();
    renderPurchases();
  }
}

// Sell a product
function sellProduct(index) {
  const product = products[index];
  if (product.quantity > 0) {
    balance += product.price;
    product.quantity--;
    updateBalance();
    renderProducts();
    renderPurchases();
  }
}

// Render purchased products
function renderPurchases() {
  const purchasesList = document.getElementById("purchases-list");
  purchasesList.innerHTML = ""; // Clear previous purchases

  products.forEach((product) => {
    if (product.quantity > 0) {
      const purchaseItem = document.createElement("li");
      purchaseItem.textContent = `${product.quantity} x ${product.name} - $${(
        product.price * product.quantity
      ).toLocaleString()}`;
      purchasesList.appendChild(purchaseItem);
    }
  });
}

// Initialize the game
function init() {
  updateBalance();
  renderProducts();
  renderPurchases();
}

// Start the app
init();
