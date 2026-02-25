const products = [
    {id:1, name:"Laptop", price:50000, category:"electronics", img:"https://via.placeholder.com/200"},
    {id:2, name:"Headphones", price:2000, category:"electronics", img:"https://via.placeholder.com/200"},
    {id:3, name:"T-Shirt", price:800, category:"clothes", img:"https://via.placeholder.com/200"},
    {id:4, name:"Shoes", price:2500, category:"clothes", img:"https://via.placeholder.com/200"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(filter="all") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    let filtered = products.filter(p => 
        filter === "all" || p.category === filter
    );

    const searchValue = document.getElementById("search").value.toLowerCase();
    filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchValue)
    );

    filtered.forEach(product => {   
        productList.innerHTML += `
            <div class="product">
                <img src="${product.img}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <input type="number" min="1" value="1" id="qty-${product.id}">
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const quantity = parseInt(document.getElementById(`qty-${id}`).value);
    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if(existing){
        existing.quantity += quantity;
    } else {
        cart.push({...product, quantity});
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <p>${item.name} x${item.quantity} - ₹${item.price * item.quantity}</p>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function toggleCart(){
    document.getElementById("cart").classList.toggle("active");
}

function clearCart(){
    cart = [];
    updateCart();
}

function filterProducts(category){
    displayProducts(category);
}

document.getElementById("search").addEventListener("input", () => displayProducts());

displayProducts();
updateCart();

































