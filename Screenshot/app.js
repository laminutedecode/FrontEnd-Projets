const btnScreen = document.querySelector('.btn-screen')
const btnClose = document.querySelector('.close')
const modal = document.querySelector('.cont-modal')



// on crée la fonction pour le screenshoot
const  capture = async () => {
try {
const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true});
console.log(stream);
// on créer un nouvelle element video
const video = document.createElement('video')

video.addEventListener('loadedmetadata', () => {

  //  on créer un element canvas
  const canvas = document.createElement("canvas");
  const ctx= canvas.getContext('2d')
//  on lui donne les dimenssion de la video
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
//  on joue la video
  video.play()

ctx.drawImage(video,0 ,0, canvas.width, canvas.height);

// on stop larret du screen
stream.getVideoTracks()[0].stop();

document.body.appendChild(canvas)

// on selectionne la source de limage
modal.querySelector('img').src = canvas.toDataURL()

// on ajoute la classe active à la modal
modal.classList.add('active')
}) 
video.srcObject = stream


} catch(error){
 alert('Il y a eu une erreur')
}
}
btnClose.addEventListener('click', () => {modal.classList.remove("active"); }) 
btnScreen.addEventListener('click', capture) 

