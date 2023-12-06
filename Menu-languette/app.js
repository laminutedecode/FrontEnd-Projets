const menu = document.querySelector('.menuSlide')
const btn = document.querySelector('.burger')
const icon = document.querySelector(".burger img");
let toggle = 0;
const items = document.querySelectorAll('.liste-item')
const currentImg = document.getElementById("imgSlide");
const imgActive = 0;


// Slider
btn.addEventListener('click', () => {
if( toggle === 0 ){
 toggle++;
 TweenMax.to(menu,1.75,{transform: 'translate(0px)', ease: Expo.easeOut});
 icon.src = "./src/moins.svg";
}else {
  toggle--;
  TweenMax.to(menu,1.75,{transform: 'translate(2000px)', ease: Expo.easeOut});
    icon.src = "./src/burger.svg";
}
}) 
 


// changement images

items.forEach(item => {


if( item.getAttribute('data-id') === imgActive ){
return ;
} else {

  item.addEventListener('mouseenter', () => {
    currentImg.src = "src/img" + item.getAttribute('data-id') + ".jpg";
    TweenMax.to(currentImg, .1, {opacity: .4})
    TweenMax.to(currentImg, .2, {delay: .1, opacity: 1})
    imgActive = item.getAttribute('data-id');
  }) 
}
})

items.forEach(item => {
  item.addEventListener('click', () => {
    toggle--;
      TweenMax.to(menu, 1.75, {
        transform: "translate(2000px)",
        ease: Expo.easeOut
      });
          icon.src = "./src/burger.svg";
  }) 
})