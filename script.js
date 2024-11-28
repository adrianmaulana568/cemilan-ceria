// Select DOM Elements
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Toggle "active" class on hamburger menu click
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
