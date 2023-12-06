const slider = document.querySelector('.slider');
const icons = document.querySelectorAll('ion-icon');
const firstImg = document.querySelectorAll('img')[0];

let toggle = false,
  prevPageX,
  prevScrollLeft,
  posDif,
   isDrag = false;

let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = slider.scrollWidth - slider.clientWidth;

  icons.forEach(icon => {
    icon.addEventListener('click',() => {
     slider.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
     setTimeout(()=> afficheIcons(), 60)
    });
  });

  function afficheIcons() {
    icons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
    icons[1].style.display =
      slider.scrollLeft == scrollWidth ? "none" : "block";
  }



// function quand on slide avec la souris
slider.addEventListener('mousedown', (e) => {
  toggle = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft
}) 
slider.addEventListener('touchstart', (e) => {
  toggle = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft
}) 


// function quand on click 
slider.addEventListener("mousemove", (e) => {
  if (!toggle) return;
  e.preventDefault();
     isDrag = true;
  slider.scrollLeft = e.pageX;
   posDif = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft =  prevScrollLeft - posDif;
  slider.classList.add('active');
  afficheIcons();
}); 
slider.addEventListener("touchmove", (e) => {
  if (!toggle) return;
  e.preventDefault();
   isDrag = true;
  slider.scrollLeft = e.pageX;
  let posDif = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft =  prevScrollLeft - posDif;
  slider.classList.add('active');
  afficheIcons();
}); 


function autoSlide(){

  if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return;
    posDif = Math.abs(posDif);
  firstImgWidth = firstImg.clientWidth + 14;
  let valDif = firstImgWidth - posDif;
  console.log(valDif);
  if(slider.scrollLeft > prevScrollLeft){
    return slider.scrollLeft += posDif > firstImgWidth / 3 ? valDif : -posDif;
  }
  slider.scrollLeft -= posDif > firstImgWidth / 3 ? valDif : -posDif;
}



slider.addEventListener('mouseup', () => {
  toggle = false;
   slider.classList.remove("active");
   if(!isDrag) return;
   isDrag = false;
   autoSlide();

}) 
slider.addEventListener('mouseleave', () => {
   toggle = false;
   slider.classList.remove("active");
   if(!isDrag) return;
   isDrag = false;
   autoSlide();

}) 
slider.addEventListener('touchend', () => {
   toggle = false;
   slider.classList.remove("active");
   if(!isDrag) return;
   isDrag = false;
   autoSlide();

}) 