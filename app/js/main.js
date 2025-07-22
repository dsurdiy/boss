const menuBtn = document.querySelector(".menu-btn");
const menuLink = document.querySelectorAll(".menu__link");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

menuLink.forEach((el) => {
  el.addEventListener("click", () => {
    document.body.classList.contains("menu-open") ? document.body.classList.remove("menu-open") : null;
  });
});