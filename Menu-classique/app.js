const burger = document.querySelector('.burger')
const menu = document.querySelector('.navigation')
const navLinks = document.querySelectorAll('.navigation li')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active')
}) 


navLinks.forEach(link => {
  link.addEventListener('click', ()=> {
    menu.classList.remove("active");
    burger.classList.remove("active");
  })
})
