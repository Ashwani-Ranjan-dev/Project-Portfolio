const cart = JSON.parse(localStorage.getItem("cart")) || [];
const customer = JSON.parse(localStorage.getItem("customer")) || {};

// Generate OrderId with the help to current date
const orderId = "ORD" + Date.now();
document.getElementById("orderId").innerHTML = orderId;

// Display Date
document.getElementById("date").innerHTML = new Date().toLocaleString();

//Customer Info
document.getElementById('customerInfo').innerHTML = `
Name : ${customer.name}<br>
Phone : ${customer.phone}<br>
Address : ${customer.address}<br>
`

// Display Products
const billItems = document.getElementById('billItems');

let subtotal = 0;

cart.forEach(item =>{

    const total = item.price * item.quantity;
    subtotal += total;
    billItems.innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td>₹${item.price}</td>
    <td>${item.quantity}</td>
    <td>${total}</td>
    </tr>
    `
});

// Calculate total amount
const gst = subtotal * 0.18;
const delivery = 100;

const grandtotal = subtotal + gst + delivery;

// Show the Total
document.getElementById("subtotal").innerHTML = `SubTotal : ₹${subtotal}`;
document.getElementById("gst").innerHTML =  `GST (18%) : ₹${gst}`;
document.getElementById('delivery').innerHTML = `Delivery : ₹${delivery}`;
document.getElementById("grandTotal").innerHTML = `GrandTotal : ₹${grandtotal}`;

function printBill(){
    window.print();
    localStorage.removeItem('cart');
    localStorage.removeItem('customer');
}
