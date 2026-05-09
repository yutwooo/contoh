
let cart = [];

function addToCart(name, price){

  cart.push({
    name,
    price
  });

  updateCart();

}

function updateCart(){

  const cartItems = document.getElementById("cart-items");

  const cartCount = document.getElementById("cart-count");

  const totalPrice = document.getElementById("total-price");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartItems.innerHTML += `
    
      <div class="cart-item">

        <h4>${item.name}</h4>

        <p>Rp ${item.price.toLocaleString()}</p>

        <button onclick="removeItem(${index})">
          Hapus
        </button>

      </div>

    `;

  });

  cartCount.innerText = cart.length;

  totalPrice.innerText =
    "Total: Rp " + total.toLocaleString();

}

function removeItem(index){

  cart.splice(index,1);

  updateCart();

}

function toggleCart(){

  document
    .getElementById("cart-panel")
    .classList
    .toggle("active");

}

/* SEARCH */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(){

  const value =
  this.value.toLowerCase();

  const items =
  document.querySelectorAll(".menu-card");

  items.forEach(item=>{

    const text =
    item.innerText.toLowerCase();

    if(text.includes(value)){

      item.style.display = "block";

    }else{

      item.style.display = "none";

    }

  });

});