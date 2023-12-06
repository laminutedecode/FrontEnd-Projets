const container = document.querySelector('.container'),
 video = container.querySelector('video'),
 progressBar = container.querySelector('.progress-bar'),
 timeline = container.querySelector('.timeline'),
 volume = container.querySelector('.volume'),
 volumeRange = container.querySelector('.volumeRange'),
 btnRetour = container.querySelector('.retour'),
 btnSuivant = container.querySelector('.suivant'),
 duree = container.querySelector('.video-duree'),
 btnPlay = container.querySelector('.play'),
 vitesseOption = container.querySelector('.vitesse-option'),
 vitesseBtn = container.querySelector('.vitesse'),
 vitesseLI = container.querySelectorAll('.option-vit'),
 pic = container.querySelector('.pic ion-icon'),
 full = container.querySelector('.full ion-icon'),
 temps = container.querySelector('.video-time p'),
 tempsTotal = container.querySelector('.video-duree p'),
 tempsvideo = container.querySelector('.progress span');

 let timer;


//  afficher les controleurs
const controls = () => {
  if(video.paused) return;
  timer = setTimeout(()=> {
  container.classList.remove('active')
},3000)}

controls();

container.addEventListener('mousemove', () => {
  container.classList.add('active');
  clearTimeout(timer)
  controls();
}) 


//  on initialise le format du temps de la video
const formatTime = time => {
  let secondes = Math.floor(time % 60),
      minutes = Math.floor(time / 60) % 60,
      hours = Math.floor(time / 3600);
      secondes = secondes < 10 ? `0${secondes}` : secondes;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      hours = hours < 10 ? `0${hours}` : hours;

      if(hours == 0){
        return `${minutes}:${secondes}`
      }
       return `${hours}:${minutes}:${secondes}`
}

//  on gere l'affichage total du temps dela video
 video.addEventListener('loadeddata', e => {
  tempsTotal.innerText = formatTime(e.target.duration);
 }) 
 //  on gere par la suite la progressBar
 video.addEventListener("timeupdate", e => {
   var {currentTime, duration} = e.target;
  //  console.log(currentTime / duration);
   var  pourcentage = (currentTime / duration) * 100;
   progressBar.style.width = `${pourcentage}%`;
   temps.innerText = formatTime(currentTime);
 }) ;
 



 // on commence par gerer le play pause de la video
btnPlay.addEventListener('click', () => {
   video.paused ? video.play() : video.pause();
  })
  video.addEventListener('play', ()=> {
    btnPlay.style.color = `green`
    btnPlay.innerHTML = `<ion-icon name="play-outline"></ion-icon>`
  })
video.addEventListener('pause', ()=> {
   btnPlay.style.color = `orangered`
   btnPlay.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
  })


  // on gere le bouton suivantet retour

  btnRetour.addEventListener('click', () => {
    video.currentTime -=5;
    // on mest 5 segonde quand on appuye retour
  }) 
  btnSuivant.addEventListener('click', () => {
video.currentTime +=5;
  }) 


  // on gere le bouton volume quand on clike on veutque sa mute la video
   volume.addEventListener('click', () => {
    let vol = video.volume;
    console.log(vol);
    if(!video.volume){
       volume.innerHTML = `<ion-icon name="volume-high-outline"></ion-icon>`;
       video.volume = 0.5;
  
    }else {
       volume.innerHTML = `<ion-icon name="volume-mute-outline"></ion-icon>`;
       video.volume = 0.0;
    }
    volumeRange.value = video.volume;
   }) 

  //  on gere maintenant l'input range du volume
  volumeRange.addEventListener('input', e => {
    video.volume = e.target.value;
    if(e.target.value == 0){
      volume.innerHTML = `<ion-icon name="volume-mute-outline"></ion-icon>`;
    }else{
      volume.innerHTML = `<ion-icon name="volume-high-outline"></ion-icon>`;
    }
  }) 

  // on gere maintenant la vitesse

  vitesseBtn.addEventListener('click', () => {
    vitesseOption.classList.toggle('active');
  }) 
    for(let i = 0 ; i <  vitesseLI.length ; i++) {
  vitesseLI[i].onclick = optionVitesse;
}
function optionVitesse(){
   vitesseOption.classList.remove('active');
  }
  
  vitesseLI.forEach(option =>{
    // console.log(opt);
    option.addEventListener('click', ()=>{
      video.playbackRate = option.dataset.speed;
      container.querySelector("li.active").classList.remove('active')
      option.classList.add('active')
})
}) 



// on gere la petit picture

pic.addEventListener('click', () => {
  video.requestPictureInPicture();
}) 

// on gere le full screen 
 full .addEventListener('click', () => {
  container.classList.toggle("fullscreen");
  if(document.fullscreenElement){
    full
  }
 }) 


//  on soccupe de la timeline
timeline.addEventListener('click', e => {
let timelineWidth = timeline.clientWidth;
video.currentTime = (e.offsetX / timelineWidth) * video.duration;
tempsvideo.innerText = formatTime(video.currentTime)
}) 


const survolBar = e => {
  let timelineWidth = timeline.clientWidth;
  progressBar.style.width = `${e.offsetX}px`
video.currentTime = (e.offsetX / timelineWidth) * video.duration;
}


 timeline.addEventListener("mousedown", () => {
  timeline.addEventListener('mousemove', survolBar) 
 } )
 container.addEventListener("mouseup", () => {
  container.removeEventListener('mousemove', survolBar) 
 } )

timeline.addEventListener('mousemove', e =>{
let offsetX = e.offsetX;
tempsvideo.style.left = `${offsetX}px`;
let timelineWidth = timeline.clientWidth;
let pourcentage = (e.offsetX / timelineWidth) * video.duration;
tempsvideo.innerText = formatTime(pourcentage)
})



