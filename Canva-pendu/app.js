// Liste des mots possibles
const words = ["ordinateur", "programmation", "javascript", "python", "developpement"];

// Mot choisi au hasard
let word = words[Math.floor(Math.random() * words.length)];

// Lettres devinées
let guessedLetters = [];

// Nombre de tentatives restantes
let remainingGuesses = 6;

// Fonction pour dessiner le pendu
function drawHangman() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(150, 350);
  ctx.lineTo(250, 350);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200, 350);
  ctx.lineTo(200, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(300, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 100);
  ctx.lineTo(300, 150);
  ctx.stroke();

  if (remainingGuesses < 6) {
    ctx.beginPath();
    ctx.arc(300, 175, 25, 0, 2 * Math.PI);
    ctx.stroke();
  }

  if (remainingGuesses < 5) {
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(300, 275);
    ctx.stroke();
  }

  if (remainingGuesses < 4) {
    ctx.beginPath();
    ctx.moveTo(300, 225);
    ctx.lineTo(275, 250);
    ctx.stroke();
  }

  if (remainingGuesses < 3) {
    ctx.beginPath();
    ctx.moveTo(300, 225);
    ctx.lineTo(325, 250);
    ctx.stroke();
  }

  if (remainingGuesses < 2) {
    ctx.beginPath();
    ctx.moveTo(300, 275);
    ctx.lineTo(275, 300);
    ctx.stroke();
  }

  if (remainingGuesses < 1) {
    ctx.beginPath();
    ctx.moveTo(300, 275);
    ctx.lineTo(325, 300);
    ctx.stroke();
  }
}





// Fonction pour afficher le mot à deviner
function displayWord() {
  const display = [];
  for (let letter of word) {
    if (guessedLetters.includes(letter)) {
      display.push(letter);
    } else {
      display.push("_");
    }
  }
  document.getElementById("word").innerText = display.join(" ");
}

// Fonction pour afficher les lettres déjà devinées
function displayGuesses() {
  document.getElementById("guesses").innerText = "Lettres devinées : " + guessedLetters.join(", ");
}

// Fonction pour deviner une lettre
function guessLetter() {
  const infos = document.querySelector('.infos')
  const guess = document.getElementById("guess").value.toLowerCase();
  infos.style.display = "none";
  infos.innerText = ""
  document.getElementById("guess").value = "";
  if (guess.length !== 1) {
    infos.style.display = "block";
    infos.innerText = "Veuillez entrer une lettre !"
    return;
    }
    if (guessedLetters.includes(guess)) {
          infos.style.display = "block";
    infos.innerText = "Vous avez déjà deviné cette lettre !"
    return;
    }
    guessedLetters.push(guess);
    if (!word.includes(guess)) {
    remainingGuesses--;
    drawHangman();
    }
    displayWord();
    displayGuesses();
    checkWinOrLose();
    } 

// Fonction pour vérifier si le joueur a gagné ou perdu
function checkWinOrLose() {
  const resultat = document.querySelector('.resultat')
  if (remainingGuesses === 0) {
    resultat.style.display = "block";
    resultat.innerText = `Vous avez perdu ! Le mot était ${word}`;
    resetGame();
  }
  if (!displayWord().includes("_")) {
    resultat.style.display = "block";
    resultat.innerText = "Bravo, vous avez gagné !";
    resetGame();
  }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  word = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  remainingGuesses = 6;
  drawHangman();
  displayWord();
  displayGuesses();
}

// Initialisation du jeu
drawHangman();
displayWord();
displayGuesses();
