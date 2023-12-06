const allLien = document.querySelectorAll('li')
const titre = document.querySelector('h1')
const ligne = document.querySelector('.ligne')
const subtitle = document.querySelector('p')
const btn = document.querySelector('button')

window.addEventListener('load', funcAnim)

function funcAnim(){

  const TL = gsap.timeline();

  TL
  .to(titre, {autoAlpha: 1, y: 0, delay: 0.2})
  .to(ligne, {height: 200})
  .to(subtitle, {autoAlpha: 1,y:0}, '-=0.2')
  .to(btn, {autoAlpha: 1,y:0}, '-=0.2')
  .to(allLien, {autoAlpha: 1,y:0, duration: 0.4, stagger: 0.1}, '-=0.2')

}