const form = document.querySelector('form');
const btn = document.querySelector('button');
const resultatText = document.querySelector('.resultat-text');
const resultatInfo = document.querySelector('.resultat-info');
const inputs = document.querySelectorAll('input')


// On retire le refresh pardefault des formulaires
form.addEventListener('submit', funcForm);
function funcForm(e){
  e.preventDefault();
  calculPOID();
}


// Function de calcule
function calculPOID(){
const taille = inputs[2].value;
let sex;
if (document.getElementById("sexH").checked) sex="h";
else if (document.getElementById("sexF").checked) sex="f";
else sex="?";
  console.log( sex );


if(!sex || !taille || taille <= 0){
    resultatInfo.style.color = `red`
    resultatInfo.innerText = `😢 il y a une erreur, verifiez les champs (La valeur de la taille doit-être supérieur à 0)😢`;}
  
 else if(sex === `h`){
    resultatText.innerText = `${inputs[2].value - 100 - ( ((inputs[2].value - 150)  / 4)).toFixed(1)}kg`
    // toFixed(1) va garder un chiffre apres la virgule
    resultatInfo.style.color = `green`
    resultatInfo.innerText = `😄 Voici votre poid idéal 😄`;

  } else if(sex === `f`){
    resultatText.innerText = `${inputs[2].value - 100 - ((inputs[2].value - 150) / 2.5).toFixed(1)}kg`
    // toFixed(1) va garder un chiffre apres la virgule
    resultatInfo.style.color = `green`
    resultatInfo.innerText = `😄 Voici votre poid idéal 😄`;
 }else{
    resultatInfo.style.color = `red`
    resultatInfo.innerText = `😢 il y a une erreur, verifiez les champs (La valeur de la taille doit-être supérieur à 0)😢`;}
 }


