const btn = document.querySelector('.burger')
const icon = document.querySelector(".burger img");
const items= document.querySelectorAll(".menu-item");
const container = document.querySelector(".container-menu");
let toggle = 0;
const TL = new TimelineMax({ paused: true });

TL
.to(container, 0.3, { opacity: 1 })
.staggerTo(items, 0.8, {
  x: 0,
  ease: Back.easeOut.config(1.7),
  stagger: 0.1,
});
 

// Slider
btn.addEventListener('click', () => {
if( toggle === 0 ){
  TL.play();
  toggle++;

 icon.src = "./src/moins.svg";
}else {
  toggle--;
  TL.reverse();
    icon.src = "./src/burger.svg";
}
}) 
 





