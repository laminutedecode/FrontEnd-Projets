let player = "X";


// on gere notre premier info
const info = document.querySelector(".resultat");
info.textContent = `Au tour de ${player}`;

const cells = document.querySelectorAll(".case");

cells.forEach((cell) => cell.addEventListener("click", handleClick));

const game = ["", "", "", "", "", "", "", "", ""];
let lock = false;

function handleClick(e) {
  const currentClick = e.target;
  const caseIndex = currentClick.getAttribute("data-index");

  if (game[caseIndex] !== "" || lock) {
    return;
  }

  game[caseIndex] = player;
  currentClick.textContent = player;

  verification();
}

const combinaisonsGagnantes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function verification() {
  for (let i = 0; i < combinaisonsGagnantes.length; i++) {
    const combinationsCheck = combinaisonsGagnantes[i];

    let a = game[combinationsCheck[0]];
    let b = game[combinationsCheck[1]];
    let c = game[combinationsCheck[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    } else if (a === b && b === c) {
      info.textContent = `Le joueur ${player} a gagné ! Appuyez sur F5 pour recommencer.`;
      lock = true;
      return;
    }
  }

  // match nul, toutes les cases sont prise, sans gagnant.
  if (!game.includes("")) {
    info.textContent = `Match Nul ! Appuyez sur F5 pour recommencer.`;
    lock = true;
    return;
  }

  switchPlayer();
}

function switchPlayer() {
 player = player === "X" ? "O" : "X";
  info.textContent = `Au tour de ${player}`;
}


