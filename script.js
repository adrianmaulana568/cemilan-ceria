// Toggle navbar menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle search form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search");

searchButton.onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// Toggle shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const cartButton = document.querySelector("#shopping-cart");

cartButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Close dropdowns if clicked outside
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchform.contains(e.target) && !searchButton.contains(e.target)) {
    searchform.classList.remove("active");
  }

  if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
