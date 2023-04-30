const btnMobile = document.getElementById("btn-menu");

function toggleMenu() {
  const btnMobile = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
