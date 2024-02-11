
const colorsLabel = [...document.querySelectorAll(".group label")];
const colorsInputs = [...document.querySelectorAll("input[type='color']")];
const orientationNb = document.querySelector(".orientation-number")
const orientationRange = document.querySelector(".input-rang")
const btnCopy = document.querySelector(".copy")
const btnAl = document.querySelector(".aleatoire")

// on créer notre objet de depart
const degradData = {
  angle: 90,
  colors: ["#ffbb00", "#f27e7e"],
};


function infos(){
  //  on affiche les noms des couleurs de notre objet de depart
  colorsLabel[0].textContent = degradData.colors[0]
  colorsLabel[1].textContent = degradData.colors[1]

  
  colorsInputs[0].value = degradData.colors[0]
  colorsInputs[1].value = degradData.colors[1]
  
  // On affiche en fond la couleur de notre objet de depart
  colorsLabel[0].style.background = degradData.colors[0];
  colorsLabel[1].style.background = degradData.colors[1];
  
  // on affiche l'angle de notre objet de depart
    orientationNb.textContent = degradData.angle

  // on applique les couleurs à la couleur de fond
  document.body.style.background = `linear-gradient(${degradData.angle}deg, ${degradData.colors[0]}, ${degradData.colors[1]})`;

  // on lence une fonction qui va adapter la couleurs du text en fonction du fond
  adaptationText();
}

infos()

function adaptationText() {
  colorsLabel.forEach((label) => {
    // on recupere la couleur de notre label et on remplace le # par rien
    const hexColor = label.textContent.replace("#", "");

    // on prends une couleurs rouge
    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);

    // on céer le calcule pour recuperer un resultat qui me donne le taux de luminosité
    const luminosite = (red * 299 + green * 587 + blue * 144) / 1000;
    console.log(luminosite);

    // on créer une condition pour appliquer une couleur en fonction de ce taux de luminosité
    if (luminosite >= 128) {
      label.style.color = "#333333";
    } else {
      label.style.color = "#f1f1f1";
    }
  });
}

// on créer un evenement sur notre input de type range
orientationRange.addEventListener("input", funcOrientation);

// Puis on créer la fonction
function funcOrientation() {
  // on li notre objet de depart à la valeur de l'input
  degradData.angle = orientationRange.value;
  // on l'applique au texte
  orientationNb.textContent = `${degradData.angle}°`;
  // on lance notre fonction info pour pouvoir le lier egalement et nous pourrons changer l'angle avec le range
  infos();
}

// 
colorsInputs.forEach((input) =>
  input.addEventListener("input", colorModification)
);

function colorModification(e) {

  const currentIndex = colorsInputs.indexOf(e.target)
  degradData.colors[currentIndex] = e.target.value.toUpperCase();
  infos();
}


// on gere le bouton copy. on commence par lui appliquer un evenement avec une fonction
btnCopy.addEventListener("click", copyDegrad);
// puis on crée une variable avec une valeur boolean pour toogle
let lock = false;
// on créerla fonction
function copyDegrad() {
  const degrade = `linear-gradient(${degradData.angle}deg, ${degradData.colors[0]}, ${degradData.colors[1]})`;

  navigator.clipboard.writeText(degrade);

  if (lock) return;

  lock = true;
  btnCopy.classList.add("active");

  setTimeout(() => {
    btnCopy.classList.remove("active");
    lock = false;
  }, 1000);
}

// bouton aleatoire


btnAl.addEventListener("click", randomGradient);

function randomGradient() {
  for (let i = 0; i < colorsLabel.length; i++) {
    randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(randomColor);
    degradData.colors[i] = randomColor.toUpperCase();
  }

  infos();
}


