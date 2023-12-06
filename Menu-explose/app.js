const btn = document.querySelector('.burger')
const icon = document.querySelector(".burger img");
const menu = document.querySelector(".container-menu");
const menuContainer = document.querySelectorAll(".container-item");
const items = document.querySelectorAll(".item");
let toggle = 0;

for (let  j = 0; j < items.length ; j++) {
  charming(items[j]);
}



btn.addEventListener('click', () => {
      if (toggle === 0) {
        toggle++;
        TweenMax.to( menu, 0.8, { left: 0, ease: Power2.easeOut });
        icon.src = "./src/moins.svg";
      } else {
        toggle--;
        TweenMax.to( menu, 0.8, { left: "-100%", ease: Power4.easeIn });
          icon.src = "./src/burger.svg";
      }
}) 
 

menuContainer.forEach((item) =>
  item.addEventListener("mouseenter", (e) => {

    let letters = Array.from(
      e.target.childNodes[1].querySelectorAll("span")
    );
    // console.log(lettreFromItem);

    for (i = 0; i < letters.length; i++) {
      TweenMax.to(letters[i], 1, {
        x: Math.floor(Math.random() * 100 - 50),
        y: Math.floor(Math.random() * 100 - 50),
        z: Math.floor(Math.random() * 100 - 50),
        rotation: Math.floor(Math.random() * 100 - 50),
        opacity: 0.3,
        ease: Circ.easeOut,
      });
    }

    menuContainer.forEach((item) =>
      item.addEventListener("mouseleave", () => {
        for (k = 0; k < letters.length; k++) {
          TweenMax.to(letters[k], 1, {
            x: 0,
            y: 0,
            z: 0,
            rotation: 0,
            opacity: 1,
            ease: Circ.easeOut,
          });
        }
      })
    );
  })
);


menuContainer.forEach((item) =>
  item.addEventListener("click", () => {
    toggle--;
    TweenMax.to(menu, 0.8, { left: "-100%", ease: Power4.easeIn });
  })
);


