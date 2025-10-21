const products = [
  {
    id: 1,
    name: "Boucles d'oreilles - Thalie Blanche",
    price: 33.90,
    description: "Boucles d'oreilles en fleurs stabilisées naturelles blanches et acier doré inoxydable.",
    image: "img/boucles/boucle (1).png",
    category: "boucles"
  },
  {
    id: 2,
    name: "Décoration - Rêverie romantique",
    price: 15.90,
    description: "Goutte de verre d'environ 40cm avec bouquet ambiance bohême.",
    image: "img/décoration/déco (1).png",
    category: "déco"
  },
  {
    id: 3,
    name: "Coiffure - Barette Juliette",
    price: 18.90,
    description: "Coiffure en fleurs séchées naturelles blanches et rose pâle.",
    image: "img/coiffures/Coiffure (1).png",
    category:  "cheveux"
  },
];

let cart = {};

let productContainer = document.getElementById("productContainer");
let cartList = document.getElementById("cartList");
let totalPriceElement = document.getElementById("totalPrice");
let searchInput = document.getElementById("searchInput");
let categoryFilter = document.getElementById("categoryFilter");

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

function renderProducts() {
  productContainer.innerHTML = '';

  let searchTerm = searchInput.value.toLowerCase();
  let selectedCategory = categoryFilter.value;

  let filteredProducts = products.filter(product => {
    let matchCategory = selectedCategory === "all" || product.category === selectedCategory;
    let matchSearch = product.name.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });

  filteredProducts.forEach(product => {
    let card = document.createElement("div");
    card.className = "product-card";

    let img = document.createElement("img");
    img.src = product.image;
    card.appendChild(img);

    let title = document.createElement("h3");
    title.textContent = product.name;

    let price = document.createElement("p");
    price.textContent = product.price.toFixed(2) + " €";

    let descriptionToggle = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = "Voir description";
    let desc = document.createElement("p");
    desc.textContent = product.description;
    descriptionToggle.appendChild(summary);
    descriptionToggle.appendChild(desc);

    let addButton = document.createElement("button");
    addButton.textContent = "Ajouter au panier";
    addButton.addEventListener("click", function () {
      if (!cart[product.id]) {
        cart[product.id] = 1;
      } else {
        cart[product.id]++;
      }
      renderCart();
    });

    let info = document.createElement("div");
    info.className = "info";
    info.appendChild(title);
    info.appendChild(price);
    info.appendChild(descriptionToggle);
    info.appendChild(addButton);

    card.appendChild(info);


    productContainer.appendChild(card);
  });
}

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;

  for (let id in cart) {
    let product = products.find(p => p.id == id);
    let quantity = cart[id];
    let itemTotal = product.price * quantity;
    total += itemTotal;

    let li = document.createElement("li");

    let nameSpan = document.createElement("span");
    nameSpan.textContent = product.name;

    let quantityDiv = document.createElement("div");
    quantityDiv.className = "quantity-control";

    let minusButton = document.createElement("button");
    minusButton.textContent = "−";
    minusButton.addEventListener("click", function () {
      cart[id]--;
      if (cart[id] <= 0) {
        delete cart[id];
      }
      renderCart();
    });

    let qtySpan = document.createElement("span");
    qtySpan.textContent = quantity;

    let plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.addEventListener("click", function () {
      cart[id]++;
      renderCart();
    });

    quantityDiv.appendChild(minusButton);
    quantityDiv.appendChild(qtySpan);
    quantityDiv.appendChild(plusButton);

    let priceSpan = document.createElement("span");
    priceSpan.textContent = itemTotal.toFixed(2) + " €";

    li.appendChild(nameSpan);
    li.appendChild(quantityDiv);
    li.appendChild(priceSpan);

    cartList.appendChild(li);
  }

  totalPriceElement.textContent = total.toFixed(2) + " €";
}

renderProducts(); 
