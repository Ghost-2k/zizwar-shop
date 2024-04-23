document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const shoppingCart = document.getElementById("shopping-cart");
  const checkoutBtn = document.querySelector(".checkout");
  const closeBtn = document.getElementById("zzzzz");

  // Function to open the shopping cart
  function openCart() {
    shoppingCart.classList.add("show");
  }

  // Add event listener to the cart icon
  cartIcon.addEventListener("click", function () {
    // Toggle the visibility of the shopping cart content
    shoppingCart.classList.toggle("show");
  });

  // Add event listener to hide the cart when the "x" button is clicked
  closeBtn.addEventListener("click", function () {
    shoppingCart.classList.remove("show");
  });

  // Initialize cart as an empty array to hold the selected products
  var cart = [];

  // Iterate through the product list
  var productlist = document.querySelectorAll("#product");
  for (let i = 0; i < productlist.length; i++) {
    // Add event listener to each "Add to Cart" button
    const addCardBtn = productlist[i].querySelector(".add-to-card");
    addCardBtn.addEventListener("click", function () {
      const price = productlist[i].querySelector("span").innerHTML;
      const image = productlist[i].querySelector("img").src;
      const title = productlist[i].querySelector("p").innerHTML;

      // Check if the product is already in the cart
      const existingProductIndex = cart.findIndex(
        (item) => item.title === title
      );
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        cart[existingProductIndex].quantity++;
      } else {
        // If the product is not in the cart, add it as a new item
        cart.push({
          title: title,
          price: price,
          image: image,
          quantity: 1,
        });
      }

      // Update the cart display
      updateCartDisplay();

      // Open the cart
      openCart();
    });
  }

  // Add event listener to checkout button
  checkoutBtn.addEventListener("click", function () {
    // Store cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cart));

    // Redirect to the checkout page
    window.location.href = "checkout.html";
  });

  function updateCartDisplay() {
    var total = 0;
    var cartContent = "";
    var titleCard = document.querySelector("#cartitem");
    var totalCard = document.querySelector("#total");
    var productinCArd = document.querySelector(".productinCArd");

    cart.forEach((product) => {
      cartContent += `<div class="item">
       <h5><span>${product.price}</span>د,م</h5>
                          <p>${product.title}</p>
                    <div >
                        <img src="${product.image}" alt="Product Image"/>
                            <p class="quantity" > ${product.quantity}</p>
                         </div>
                     </div>`;
      total += +product.price * product.quantity;
    });

    productinCArd.innerHTML = cartContent;
    if (cart.length > 0) {
      titleCard.innerHTML = "العناصر في سلة التسوق الخاصة بك";
      totalCard.innerHTML = total + "د,م";
    } else {
      titleCard.innerHTML = "سلة التسوق الخاصة بك فارغة";
      totalCard.innerHTML = "0.00 د.م";
    }
  }
});

//telegram code//

document.addEventListener("DOMContentLoaded", function () {
  const buyNowBtns = document.querySelectorAll(".buy-now");

  // Initialize cart as an empty array to hold the selected products
  var cart = [];

  // Add event listener to each "Buy Now" button
  buyNowBtns.forEach(function (buyNowBtn) {
    buyNowBtn.addEventListener("click", function () {
      const productContainer = buyNowBtn.parentNode; // Get the parent of the "Buy Now" button
      const price = productContainer.querySelector("h5 span").innerHTML;
      const image = productContainer.querySelector("img").src;
      const title = productContainer.querySelector("p").innerHTML;

      // Check if the product is already in the cart
      const existingProductIndex = cart.findIndex(
        (item) => item.title === title
      );
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        cart[existingProductIndex].quantity++;
      } else {
        // If the product is not in the cart, add it as a new item
        cart.push({
          title: title,
          price: price,
          image: image,
          quantity: 1,
        });
      }

      // Store cart items in local storage
      localStorage.setItem("cartItems", JSON.stringify(cart));

      // Redirect to the checkout page
      window.location.href = "checkout.html";
    });
  });
});
window.addEventListener("scroll", function () {
  var navBar = document.querySelector(".nav-bar");
  var scrollPosition = window.scrollY;

  // Change background color based on scroll position
  if (scrollPosition > 0) {
    navBar.style.backgroundColor = "#694531";
  } else {
    navBar.style.backgroundColor = "transparent"; // Change it back to transparent when scrolled to the top
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("productList");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Function to render products
  function renderProducts() {
    productList.innerHTML = "";
    products.forEach(function (product) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h5><span>${product.price}</span>د,م</h5>
                    <p>${product.name}</p>
                `;
      productList.appendChild(listItem);
    });
  }

  // Initial rendering of products
  renderProducts();
});
    


