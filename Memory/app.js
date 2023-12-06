// Sélectionne tous les éléments HTML avec la classe "carte" et les stocke dans la variable "cartes"
const cartes = document.querySelectorAll('.carte');

// Initialise une variable "carteRetourner" à la valeur "false"
let carteRetourner = false;

// Initialise deux variables "premiereCarte" et "secondeCarte" sans valeur assignée pour le moment
let premiereCarte, secondeCarte;

// Initialise une variable "verouillage" à la valeur "false"
let verouillage = false;

// Parcourt chaque élément dans la liste "cartes" et ajoute un écouteur d'événement "click" qui déclenchera la fonction "retourneCarte"
cartes.forEach(carte => {
  carte.addEventListener('click', retourneCarte)
})

// Définition de la fonction "retourneCarte" qui sera exécutée lorsqu'un élément est cliqué
function retourneCarte() {
  // Bascule la classe "active" sur le deuxième enfant de l'élément cliqué (utilisation de "this" pour faire référence à l'élément actuel)
  this.childNodes[1].classList.toggle('active');

  // Si aucune carte n'est déjà retournée
  if (!carteRetourner) {
    carteRetourner = true;
    premiereCarte = this; // Stocke la première carte retournée
    return;
  }

  carteRetourner = false;
  secondeCarte = this; // Stocke la deuxième carte retournée

  correspondance(); // Appelle la fonction "correspondance" pour vérifier si les deux cartes correspondent
}

// Définition de la fonction "correspondance" qui vérifie si les deux cartes retournées correspondent
function correspondance() {
  if (premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')) {
    // Si les deux cartes ont le même attribut "data-attr", les écouteurs d'événement "click" sont supprimés pour ces cartes
    premiereCarte.removeEventListener('click', retourneCarte);
    secondeCarte.removeEventListener('click', retourneCarte);
  } else {
    verouillage = true; // Active la variable "verouillage" pour empêcher les interactions pendant une période de temps

    setTimeout(() => {
      // Après 1500 millisecondes (1,5 seconde), les classes "active" sont supprimées des enfants des cartes
      premiereCarte.childNodes[1].classList.remove('active');
      secondeCarte.childNodes[1].classList.remove('active');
      verouillage = false; // Désactive la variable "verouillage"
    }, 1500);
  }
}

// Définition de la fonction "aleatoire" qui mélange l'ordre des cartes de manière aléatoire
function aleatoire() {
  cartes.forEach(card => {
    // Génère un nombre aléatoire entre 0 et 11 (12 cartes au total)
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos; // Modifie l'ordre CSS de chaque carte en fonction du nombre aléatoire généré
  })
}

aleatoire(); // Appelle la fonction "aleatoire" pour mélanger les cartes au chargement de la page
