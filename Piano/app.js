// on selectionne toutes lesnotes
const notes = document.querySelectorAll('.note')
const volume = document.querySelector('.volume input')


// on mest une note par default
let allAudios =  [],audio = new Audio('./audios/a.wav')

// on applique cette fonction a tout nos element note
const pianoPlay =  (note) => {
  audio.src = `./audios/${note}.wav`
  audio.play();

  const clicKey = document.querySelector(`[data-key="${notes}]"`)
  clicKey.classList.add('active')
  setTimeout(()=> {
 clicKey.classList.remove("active");
  },150)
}

// on l'applique a notre evenement
notes.forEach(note => {
  allAudios.push(note.dataset.key)
  // console.log(note.dataset.key);
  note.addEventListener('click', () => pianoPlay(note.dataset.key)) 

})


const pressKey = (e)=> {
// console.log(e);
pianoPlay(e.key)
}

document.addEventListener("keydown", pressKey)


function slideVolume(e){
audio.volume = e.target.value;
}


volume.addEventListener('input', slideVolume)