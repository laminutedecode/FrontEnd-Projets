window.onload = function () {
  let secondesChrono = 00;
  let miliChrono = 00;
  let miliSecondes = document.querySelector(".milisecondes");
  let secondes = document.querySelector(".secondes");
  let start = document.querySelector(".btn-play");
  let stop = document.querySelector(".btn-pause");
  let reset = document.querySelector(".btn-reset");
  let Interval;
  const btns = document.querySelectorAll('.btn')


  start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    btns[0].classList.add('active')
    btns[1].classList.remove("active");
  };

  stop.onclick = function () {
    clearInterval(Interval);
    btns[1].classList.add("active");
    btns[0].classList.remove("active");
  };

  reset.onclick = function () {
    clearInterval(Interval);
    miliChrono = "00";
    secondesChrono = "00";
    miliSecondes.innerHTML = miliChrono;
    secondes.innerHTML = secondesChrono;
    btns[0].classList.remove("active");
    btns[1].classList.remove("active");
  };

  function startTimer() {
    miliChrono++;

    if (miliChrono <= 9) {
      miliSecondes.innerHTML = "0" + miliChrono;
    }

    if (miliChrono > 9) {
      miliSecondes.innerHTML = miliChrono;
    }

    if (miliChrono > 99) {
      console.log("seconds");
      secondesChrono++;
      secondes.innerHTML = "0" + secondesChrono;
      miliChrono = 0;
      miliSecondes.innerHTML = "0" + 0;
    }

    if (secondesChrono > 9) {
      secondes.innerHTML = secondesChrono;
    }
  }
};
