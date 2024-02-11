
const horloge = document.querySelector(".clock");

horloge.addEventListener('onLoad', time) 

function time(){
  let date = new Date();
  let heures = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();

if(heures == 0){
  h=24;
}

heures = (heures < 10) ? "0" + heures : heures;
minutes = (minutes < 10) ? "0" + minutes : minutes;
secondes = (secondes < 10) ? "0" + secondes : secondes;

let time = `${heures} : ${minutes} : ${secondes}`
horloge.innerText = time;

}
setInterval(time, 1000)

