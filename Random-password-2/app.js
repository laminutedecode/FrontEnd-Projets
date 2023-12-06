const mdpLength = document.querySelector(".mdp-length input");
const btn = document.querySelector(".btn-generate");
const options = document.querySelectorAll('.option input');
const mdpInputs = document.querySelector(".inp-groupe input");
const indicator = document.querySelector(".indicator");
const copy = document.querySelector('.copy')



const caracteres = {
  majuscules: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  minuscules: "abcdefghijklmnopqrstuvwxyz",
  nombres:"0123456789",
  symboles: "@/*+-=%§,;?!<>#&:~'){}|_"
}

// GENERER LE MOT DE PASSE

const generateMdp = ()=> {
  let passwordBase = "",
   passRandom = "",
   exclureRepetition = false,
   passLength = mdpLength.value;
  
  
  options.forEach(option => {
    if(option.checked){
      // console.log(option);
      if(option.id !== "repetitions" && option.id !== "espaces" ){
        // on lie notre variables caracteres aux inputs
        passwordBase += caracteres[option.id];
      } else if (option.id === "espaces") {
        // on rajopute les espaces si input coché
         passwordBase += `   ${passwordBase}    `
      } else {
          exclureRepetition = true;
      }
    }
  });
  // console.log(passwordBase);
  
  for (let i = 0; i < passLength; i++) {
      let randomLettres =  passwordBase[Math.floor(Math.random() * passwordBase.length)];

      if(exclureRepetition){
        !passRandom.includes(randomLettres) || randomLettres == " " ? passRandom += randomLettres : i--;
      }else{
        passRandom += randomLettres
      }
  }
   console.log(passRandom);
   mdpInputs.value = passRandom
}


const funcIndicator = ()=> {
  indicator.id = mdpLength.value <= 8 ? "petit" : mdpLength.value <= 16 ? "moyen" : "long"
}

// gestion de la longueur du mot de passe
const updateMdp = () => {
  // console.log(mdpLength.value);
  document.querySelector(".mdp-length span").innerText = mdpLength.value;
  generateMdp()
  funcIndicator()
}
updateMdp()


const funcCopy = () => {
  navigator.clipboard.writeText(mdpInputs.value);
  copy.style.color = `#0091d0`;
  copy.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> copier !`;
  setTimeout(()=> {
    copy.innerHTML = `<ion-icon name="copy-outline"></ion-icon>`;
  }, 1500)
}

copy.addEventListener('click', funcCopy) 
mdpLength.addEventListener('input', updateMdp) 
btn.addEventListener('click', generateMdp) 