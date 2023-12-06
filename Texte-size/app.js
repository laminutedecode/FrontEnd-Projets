let txt = document.querySelector('.txt-taille');
let plus = document.querySelector('.plus');
let moins = document.querySelector('.moins');
let infos = document.querySelector('.infos');


// Je donne la variable i qui va etre egale a ma valeur de taille de depart puis je lincremente de 1
let i =  14;
let agrandir = ()=> {
i += 1;
txt.style.fontSize = i + `px`;
infos.innerText = ` Taille actuelle:${i}px`
}

let reduire = () => {
  i -= 1;
  txt.style.fontSize = i + `px`;
  infos.innerText = ` Taille actuelle:${i}px`
}



plus.addEventListener('click', () => {
  agrandir();
})

moins.addEventListener('click', () => {
  reduire();
})