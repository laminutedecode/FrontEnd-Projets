const cardNumber = document.getElementById('numero');
let cardNumberValue = '';

cardNumber.addEventListener('input', () => {
  // On récupère la valeur de l'input
  let val = cardNumber.value;

  // On nettoie notre valeur
  val = val.replace(/\s/g, "");

  // On limite la longueur de la valeur à 16 caractères
  if (val.length > 16) {
    val = val.slice(0, 16);
  }

  // On rajoute un espace sur notre input après 4 chiffres
  let newVal = '';
  for(let i = 0; i < val.length; i++){
    if( i % 4 === 0 && i > 0 ){
     newVal += ' ';
    }
    newVal += val[i];
  }

  // On stocke la nouvelle valeur dans notre variable
  cardNumberValue = newVal;

  // On met à jour la valeur de l'input
  cardNumber.value = newVal;
});
