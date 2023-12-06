

function funcTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if(hours == 0){
        hours = 24
    }

    if(hours >= 24){
        hours = hours - 24;
    }

    hours = (hours<10)? "0" + hours : hours;
    minutes = (minutes<10)? "0" + minutes : minutes;
    secondes = (secondes<10)? "0" + secondes : secondes;


    let time = `${hours}:${minutes}:${secondes} `
    const currentTime = document.querySelector('.clock');

    currentTime.textContent = time;
    currentTime.innerText = time;

    setTimeout(funcTime, 1000);
}

funcTime()
