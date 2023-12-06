const btn = document.querySelector('.burger')
const items = document.querySelectorAll('.box')
const ligne = document.querySelector('.ligne')


btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  ligne.classList.toggle('active-ligne')

  items.forEach(item => {
    item.classList.toggle('placement')


    if(item.classList.contains('placement') === true) {
      setTimeout(()=> {
        item.classList.toggle("visible");
      },200)
    }else {
        item.classList.toggle("visible");
    }
  })
}) 


items.forEach(item => {
  item.addEventListener('click', () => {
    btn.classList.toggle('active');
    ligne.classList.toggle("active-ligne");

    items.forEach(item => {
      item.classList.toggle('placement')
      item.classList.toggle('visible')
    })
  }) 
})