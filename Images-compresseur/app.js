const upload = document.querySelector('.upload-box')
const container = document.querySelector('.container')
const fileInp = document.querySelector('.file-inp')
const img = document.querySelector('.img-prev')
const widthInp = document.querySelector('.width input')
const heightInp = document.querySelector('.height input')
const ratioInp = document.querySelector('.ratio input')
const qualiteInp = document.querySelector('.qualite input')
let imgRatio
const download = document.querySelector('.download-btn')
// 1) on rend toute la zone cliquable pour le choix du fichier
upload.addEventListener('click', ()=> fileInp.click())


// 2) fonction pour selectionner notre fichier et l'afficher
const loadFile = (e)=> {
  const file = e.target.files[0];
  console.log(file);
  if(!file) return;
  img.src = URL.createObjectURL(file);
  img.addEventListener('load', () => {
    container.classList.add("active");
// boutons width et height
    widthInp.value = img.naturalWidth;
    heightInp.value = img.naturalHeight;

    // bouton ratio
    imgRatio = img.naturalWidth / img.naturalHeight
  }) 
}
fileInp.addEventListener('change', loadFile)


// BOUTON RATIO



widthInp.addEventListener('keyup', ()=> {
const height = ratioInp.checked ? widthInp.value / imgRatio : heightInp.value;

heightInp.value = Math.floor(height)
})

heightInp.addEventListener('keyup', ()=> {
const width = ratioInp.checked ? heightInp.value * imgRatio : widthInp.value;

heightInp.value = Math.floor(width)
})


// bouton download

const funcDownload = () => {
  const canvas = document.createElement('canvas')
  const a = document.createElement('a')
  const ctx = canvas.getContext('2d');


const imgQuality = qualiteInp.cheked ? 0.7 : 1.0;

  canvas.width = widthInp.value;
  canvas.height = heightInp.value;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  // document.body.appendChild(canvas)

  // pour telegarger le fichier
  a.href = canvas.toDataURL('image/jpeg', imgQuality)
  a.download = new Date().getTime();
  a.click();
}

download.addEventListener('click', funcDownload)



