

const navToggle = document.querySelector(".nav-toggle");
const side = document.querySelector(".side");

navToggle.addEventListener('click', () => {
  side.classList.toggle("show-side");
});