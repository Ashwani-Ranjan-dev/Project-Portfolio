const products = [

{
    id:1,
    name:"Laptop",
    price:55000,
    image:"assest/images/laptop.avif"
},

{
    id:2,
    name:"Smart Phone",
    price:25000,
    image:"assest/images/mobilephone.jpg"
},

{
    id:3,
    name:"Headphones",
    price:2999,
    image:"assest/images/headphone.jpg"
},

{
    id:4,
    name:"Sports Shoes",
    price:1999,
    image:"assest/images/shoe.webp"
},

{
    id:5,
    name:"Smart Watch",
    price:4999,
    image:"assest/images/smartwatch.jpg"
},

{
    id:6,
    name:"Bluetooth Speaker",
    price:2499,
    image:"assest/images/bluetoothspeaker.webp"
},

{
    id:7,
    name:"Gaming Mouse",
    price:1499,
    image:"assest/images/gamingmouse.jpg"
},

{
    id:8,
    name:"Keyboard",
    price:1799,
    image:"assest/images/keyboard.jpg"
},
{
    id:9,
    name:"Men's Tshirt",
    price:399,
    image:"assest/images/menstshirt.jpg"
},
{
    id:10,
    name:"Ladies Kurti",
    price:799,
    image:"assest/images/girlskurti.jpg"
}

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addtoCart(id){

    const product = products.find(item => item.id === id);

    const existingProduct = cart.find(item => item.id === id);

    if(existingProduct){
        existingProduct.quantity++;
    }
    else{
        cart.push({
            ...product,
            quantity:1
        });
    }

    localStorage.setItem("cart" , JSON.stringify(cart));

    function updateCartCount(){

        let totalItems = 0 ;

        cart.forEach( item =>{
            totalItems += item.quantity;
        })

        document.getElementById("cartCount").innerHTML =  `Cart(${totalItems})`;
    }

    updateCartCount()
    alert(product.name + " added to cart!"); 

}


const productGrid = document.getElementById("productGrid");

products.forEach(product=>{

productGrid.innerHTML += `

<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick ="addtoCart(${product.id})">Add to Cart</button>

</div>

`;

});
