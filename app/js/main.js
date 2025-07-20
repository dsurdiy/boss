const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuLink = document.querySelectorAll(".menu__link");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

menuLink.forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.contains("menu--active") ? menu.classList.remove("menu--active") : null;
  });
});