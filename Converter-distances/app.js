const input = document.querySelector('#input');
const resultat = document.querySelector('#resultat');
const unites = document.querySelector('#unites');
const unitesResultat = document.querySelector('#unitesResultat');


var unitesValue, unitesResultatValue;
input.addEventListener('keyup', resultatFinal );
unites.addEventListener('change', resultatFinal );
unitesResultat.addEventListener('change', resultatFinal );

unitesValue = unites.value;
unitesResultatValue = unitesResultat.value;
function resultatFinal(){
 unitesValue = unites.value;
unitesResultatValue = unitesResultat.value;

  if(unitesValue === "Metre" && unitesResultatValue ==="Kilometre"){
    resultat.value = Number(input.value)* 0.001;
  }else if(unitesValue === "Metre" && unitesResultatValue === "Centimetre"){
    resultat.value = Number(input.value)* 100;
  }else if(unitesValue === "Metre" && unitesResultatValue === "Metre"){
    resultat.value = input.value;
  }

   if(unitesValue === "Kilometre" && unitesResultatValue ==="Metre"){
    resultat.value = Number(input.value)* 1000;
  }else if(unitesValue === "Kilometre" && unitesResultatValue === "Centimetre"){
    resultat.value = Number(input.value)* 100000;
  }else if(unitesValue === "Kilometre" && unitesResultatValue === "Metre"){
    resultat.value = input.value;
  }
   if(unitesValue === "Centimetre" && unitesResultatValue === "Metre"){
    resultat.value = Number(input.value)* 0,00001;
  }else if(unitesValue === "Centimetre" && unitesResultatValue  === "Kilometre"){
    resultat.value = Number(input.value)* 0.01;
  }else if(unitesValue === "Centimetre" && unitesResultatValue  === "Centimetre"){
    resultat.value = input.value;
  }
}

