const items = document.querySelectorAll('.menu-items')
const icons = document.querySelectorAll('.items-icon')
const children = document.querySelectorAll('.menu-items a')

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');


    for(let i = 0; i < icons.length; i++){
      if(icons[i].getAttribute('data-anim') === item.getAttribute('data-anim')){
        icons[i].classList.toggle('active-icons')
      }
    }
  }) 
})


children.forEach(child => {
  child.addEventListener('click', (e) => {
    e.stopPropagation();
  }) 
})