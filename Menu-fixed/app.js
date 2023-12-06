const nav = document.querySelector('nav')

let hauteur = nav.offsetTop;

// offsettop permet de récuperer la hauteur entre mon élément et le top
console.log(hauteur)


let hauteurScroll =  scrollY;
//  ceci me donne la hauteur quand je scroll en pixel
console.log(hauteurScroll)


// je créer la class fixed en css


// je créer mon évenement

window.addEventListener('scroll', ()=> {
  if(scrollY >= hauteur + 200) {
    nav.classList.add('fixed')
  }else{
    nav.classList.remove('fixed')
  }
})

console.log(scrollY)