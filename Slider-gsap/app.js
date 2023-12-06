const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const slide = Array.from(document.querySelectorAll(".slide"));



let index = 0;

function slideRight() {
  const TLRight = gsap.timeline();

  TLRight.set(index, {
    index : index + 1,
  }).to(slide[index], { duration: 0.6, x: 0 });
}

function slideLeft() {
  const TLLeft = gsap.timeline();

  TLLeft.set(index, {
     index,
  }).to(slide[index], { duration: 0.6, x: "-100%" });
}

const negation = gsap.to(container, {
  paused: true,
  keyframes: [
    { duration: 0.1, x: -4 },
    { duration: 0.1, x: 4 },
    { duration: 0.1, x: -4 },
    { duration: 0.1, x: 0 },
  ],
});

function slideDirection(direction) {
  if (direction === "next") {
    if (index === 2) {
      negation.seek(0);
      negation.play();
      return;
    }

    index++;
    slideRight();
  } else if (direction === "prev") {
    if (index === 0) {
      negation.seek(0);
      negation.play();
      return;
    }

    slideLeft();
    index--;
  }
}

btnRight.addEventListener("click", () => {
  slideDirection("next");
});

btnLeft.addEventListener("click", () => {
  slideDirection("prev");
});
