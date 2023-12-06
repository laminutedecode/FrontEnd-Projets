const btn = document.querySelector('.burger')
const menu = document.querySelector('.container')
const items = document.querySelectorAll('.liste-items')
const icon = document.querySelector('.burger img');
let i = 0;


const TL = new TimelineMax({paused: true})


TL
.to(menu, 1, {width: '50%'})
.staggerTo(items,0.3,{opacity: 1, x: 0}, .2, '-=0.75');


btn.addEventListener('click', () => {
  if( i  === 0 ){
  i++ ;
  TL.play();
  icon.src = './src/moins.svg'
  } else {
    i--;
    TL.reverse();
     icon.src = "./src/burger.svg";
  }

}) 


items.forEach(item => {
  item.addEventListener('click', () => {
        i--;
        TL.reverse();
        icon.src = "./src/burger.svg";
  }) 
})