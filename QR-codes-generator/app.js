const resultat = document.querySelector('.resultat-qr');
const btn = document.querySelector('form button');
const input = document.querySelector('form input');
const info = document.querySelector('.info');
const qr = document.querySelector('.resultat-qr img');

btn.addEventListener('click', () => {
  let qrValue = input.value;
  console.log(qrValue);
  if(!qrValue){
    info.innerText = `Indiquer un URL`;
     btn.innerText = "Generer un QR code"
  }else {
    info.innerText = ``
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qr.addEventListener('load', ()=> {
      resultat.classList.add('active');
      btn.innerText = "Votre QR code"
    })
  }
}) 

// https://goqr.me/api/

input.addEventListener("keyup", ()=> {
   if(!input.value){
    resultat.classList.remove('active')
   }
})