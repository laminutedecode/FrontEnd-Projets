const rep = ["b", "d", "c", "a", "c", "b"];
const form = document.querySelector('.quizz-form');


form.addEventListener('submit', funcForm);

function funcForm(e){
  e.preventDefault();

  const resultat = [];
  const toutLesBoutonsRadios = document.querySelectorAll("input[type='radio']:checked");

  toutLesBoutonsRadios.forEach((radioButtons, index)=>{
    if(radioButtons.value === rep[index]){
    resultat.push(true)
  }else {
    resultat.push(false)
  }
}
)
funcResultat(resultat)
}


// on verifie les résultats
const resultat = document.querySelector('.resultat');
const titreResultat = document.querySelector('.resultat h2');
const scoreResultat = document.querySelector('.resultat .score');
const infoResultat = document.querySelector('.resultat .info');
function funcResultat(res){
const nombreErreurs = res.filter(el => el === false).length;

console.log(nombreErreurs);

switch(nombreErreurs){
  case 0:
  resultat.style.backgroundColor = "rgb(125, 241, 129)"
  titreResultat.innerText = `😎Félicitation, c'est un sans faute !😎`;
  infoResultat.innerText = `👏👏👏👏👏👏`;
  scoreResultat.innerHTML = "Score: <span> 6 / 6 </span>"
;
break;
  case 1:
  resultat.style.backgroundColor = "rgb(241, 125, 125)"
  titreResultat.innerText = `😅Il y a ${nombreErreurs} erreur 😅`;
  infoResultat.innerText = `Presque !!!`;
  scoreResultat.innerHTML = "Score: <span> 5 / 6 </span>"
break;
  case 2:
  resultat.style.backgroundColor = "rgb(241, 125, 125)"
  titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
  infoResultat.innerText = `Oups !!!`;
  scoreResultat.innerHTML = "Score: <span> 4 / 6 </span>"
break;
  case 3:
  resultat.style.backgroundColor = "rgb(241, 125, 125)"
  titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
  infoResultat.innerText = `Oups !!!`;
  scoreResultat.innerHTML = "Score: <span> 3 / 6 </span>"
break;
  case 4:
  resultat.style.backgroundColor = "rgb(241, 125, 125)"
  titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
  infoResultat.innerText = `Oups !!!`;
  scoreResultat.innerHTML = "Score: <span> 2 / 6 </span>"
break;
  case 5:
  resultat.style.backgroundColor = "rgb(241, 125, 125)"
  titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
  infoResultat.innerText = `Oups !!!`;
  scoreResultat.innerHTML = "Score: <span> 1 / 6 </span>"
break;
  case 6:
  resultat.style.backgroundColor = "rgb(241, 125, 125)"
  titreResultat.innerText = `😭Il y a ${nombreErreurs} erreurs 😭`;
  infoResultat.innerText = `Tu as tout faut`;
  scoreResultat.innerHTML = "Score: <span> 0 / 6 </span>";
  default:
    titreResultat.innerText = `Erreur innatendu !`;
}
}


