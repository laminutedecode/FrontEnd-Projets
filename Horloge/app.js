const sec = document.querySelector('.seconde')
const min = document.querySelector('.minute')
const heure = document.querySelector('.heure')


setInterval(function(){
    let time = new Date();
    let secondes = time.getSeconds() * 6;
    let minutes= time.getMinutes() * 6;
    let heures= time.getHours() * 30;


    sec.style.transform = `rotateZ(${secondes}deg)`
    min.style.transform = `rotateZ(${minutes}deg)`
    heure.style.transform = `rotateZ(${heures + (minutes / 12)}deg)`
})