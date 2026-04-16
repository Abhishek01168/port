const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const servicesBtn = document.getElementById("services-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

// Toggle main menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Toggle dropdown (mobile)
servicesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

