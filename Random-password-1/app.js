const form = document.querySelector('form');
const input = document.querySelector('#login');
const bar = document.querySelector('.bar');
const info = document.querySelector('.info');
const resultat = document.querySelector('.resultat');
const id = document.querySelector('.resultat-id');
const mdp = document.querySelector('.resultat-mdp');
const button = document.querySelector('#generator');

form.addEventListener('click', funcForm)

function funcForm(e){
  e.preventDefault();

  input.addEventListener('keyup', valider)
  input.addEventListener('submit', valider)
  button.addEventListener('click', valider)
  let valeurId = input.value
  // on récupere la valeur de notre input
  console.log(valeurId);
  button.addEventListener("click", function(){
    genererMDP()
  })


}


// on gere la petit animation info
function valider(){
  if(input.value){
    info.style.color = "green";
    info.textContent = `Tout est ok`;
    bar.style.background = "green"
    bar.classList.add('active');
  }else if(!input.value || input.value ==="") {
    info.style.color = "red";
    info.textContent = `Veuillez créer un login avant de generer un mot de passe`;
    bar.style.background = "red"
     bar.classList.add('active');
  }else {
    info.textContent = `Erreur inattendue s'est produite`;
    bar.style.display = 'none';
      form.reset();
  }
}

// on gere le mot de passe aléatoire


// on créer l'évenement



const genererMDP = ()=> {
  //  on genere une variable avec pleins de caractere
  let caractere = `abcdefghijklmnopqrstuvwxyz/*-+%!:,;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@`;
  // math random va me renvoyer un chiffre a virgule
  // math.round nous donne un entier
  // 10000 est pour augmenter la plage de valeur 
  // substring() permet de lire une chaine de caractere à l'interieur d'une chaine de caractère
  let mdpAleatoire = '';
  const mdpLongueur = 20;

  for(let i=0; i < mdpLongueur ; i+=1 ) {
  let aleatoire = Math.round(Math.random() * caractere.length);
   mdpAleatoire += caractere.substring(aleatoire, aleatoire +1);
  }

  if(input.value === ""){
      info.style.color = "red";
    info.textContent = `Veuillez créer un login avant de generer un mot de passe`;
    bar.style.background = "red"
     bar.classList.add('active');
  }else{
    resultat.style.display = "block"
  id.innerHTML = `Votre identifiant: <span>${input.value}</span>`;
  mdp.innerHTML = `Votre mot de passe: <span>${mdpAleatoire}</span>`;
  }
}
