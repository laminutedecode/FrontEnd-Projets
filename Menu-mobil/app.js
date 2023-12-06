const btn = document.querySelector(".burger");
const menu = document.querySelector('nav')
const items = document.querySelectorAll(".items");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("menu-active");

});


items.forEach((item) => {
  item.addEventListener("click", () => {
    btn.classList.remove("active");
    menu.classList.remove("menu-active");
  });
});
