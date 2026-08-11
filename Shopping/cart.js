let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
const subTotal = document.getElementById("subtotal");
const gstElement = document.getElementById("gst");
const deliveryElement = document.getElementById("delivery");
const grandTotalElement = document.getElementById("grandTotal");

function displayCart() {
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `<h2>Your cart is Empty</h2>`;
        subTotal.innerHTML = "Subtotal : ₹0";
        gstElement.innerHTML = "₹0";
        deliveryElement.innerHTML = "₹0";
        grandTotalElement.innerHTML = "₹0";
        return;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}">
            <div class="cart-info">
                <h2>${item.name}</h2>
                <h3>Price : ₹${item.price}</h3>
                <h4>Total : ₹${item.price * item.quantity}</h4>
            </div>
            <div class="quantity">
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <h3>${item.quantity}</h3>
                <button onclick="increaseQuantity(${item.id})">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${item.id})">
                Remove
            </button>
        </div>
        `;
    });

    // Now calculate totals AFTER looping
    const gst = total * 0.18;
    const delivery = total > 0 ? 100 : 0;
    const grandTotal = total + gst + delivery;

    subTotal.innerHTML = `₹${total.toFixed(2)}`;
    gstElement.innerHTML = `₹${gst.toFixed(2)}`;
    deliveryElement.innerHTML = `₹${delivery.toFixed(2)}`;
    grandTotalElement.innerHTML = `₹${grandTotal.toFixed(2)}`;
}

function increaseQuantity(id) {
    cart.forEach(item => {
        if (item.id === id) {
            item.quantity++;
        }
    });
    saveCart();
}

function decreaseQuantity(id) {
    cart.forEach(item => {
        if (item.id === id && item.quantity > 1) {
            item.quantity--;
        }
    });
    saveCart();
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Call displayCart when page loads
displayCart();

document.getElementById('checkoutBtn')
.addEventListener("click" , ()=>{
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    window.location.href = "checkout.html";
})