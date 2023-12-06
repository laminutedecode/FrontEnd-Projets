
const titre = document.querySelector('.titre');
const suivant = document.querySelector('.suivant');
const retour = document.querySelector('.retour');
const play = document.querySelector('.play-pause');
const audio = document.querySelector('audio');

// on créer dabord une liste de musique 


const liste = [
  {
  src: "./src/audio-1.mp3",
  nom: "Instrumental 1",
},
  {
  src: "./src/audio-2.mp3",
  nom: "Instrumental 2",
},
  {
  src: "./src/audio-3.mp3",
  nom: "Instrumental 3",
},
  {
  src: "./src/audio-4.mp3",
  nom: "Instrumental 4",
},
];


let musiquePlay = false;


// on gere la lecture
function playMusique(){
  musiquePlay = true;
  audio.play();
  play.classList.add('active')
  play.innerHTML = `<ion-icon name="play-outline"></ion-icon>`
}

// on gere la pause
function pauseMusique(){
  musiquePlay = false;
  audio.pause();
  play.classList.remove('active');
  play.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
}

// On ajoute play et pause sur les boutons

play.addEventListener('click', ()=>(musiquePlay ? pauseMusique() : playMusique()))

// on charge maintenant le son

function loadMusique(liste){
  titre.textContent = liste.nom;
  audio.src = liste.src;
}


// on mest en place le premier son de la liste
let i = 1;

loadMusique(liste[i])


// retour

function retourMusique(){
  i--;
  if(i < 0){
    i = liste.length - 1;
  }
  loadMusique(liste[i])
  playMusique();
}

retour.addEventListener('click', retourMusique);
// suivant

function suivantMusique(){
  i++;
  if(i > liste.length - 1){
    i = 0;
  }
  loadMusique(liste[i]);
   playMusique();
}

suivant.addEventListener('click', suivantMusique);