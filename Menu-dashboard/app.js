const items = document.querySelectorAll('.items');
const sousMenu = document.querySelectorAll('.sous-menu');



items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    for(i = 0; i < sousMenu.length; i++){
      if ( sousMenu[i].getAttribute("data-anim") === item.getAttribute("data-anim") ) {
    sousMenu[i].classList.toggle("active");
      }
    }
  }) 
})

items.forEach(item => {
  item.addEventListener('mouseleave', () => {
    for(i = 0; i < sousMenu.length; i++){
      if ( sousMenu[i].getAttribute("data-anim") === item.getAttribute("data-anim") ) {
    sousMenu[i].classList.toggle("active");
      }
    }
  }) 
})


sousMenu.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.classList.add('active')
  }) 
})
sousMenu.forEach(menu => {
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('active')
  }) 
})