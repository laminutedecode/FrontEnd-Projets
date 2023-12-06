const indicateurs = document.querySelector('.indicateurs');
const input = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const faible = document.querySelector('.indicateurs span:nth-child(1)');
const moyen = document.querySelector('.indicateurs span:nth-child(2)');
const fort = document.querySelector('.indicateurs span:nth-child(3)');
const icon = document.querySelector('.box .eye');

let regexFaible = /[a-z]/;
let regexMedium = /\d+/;
let regexFort = /[!, @, #, $, %, ^, &, *, ?,_,-,(,),]/;

function trigger() {
    if (input.value != "") {
        indicateurs.style.display = "block";
        indicateurs.style.display = "flex";
        icon.style.display = "block";
        
        if (regexFaible.test(input.value)) {
            faible.classList.add('active');
        } else {
            faible.classList.remove('active');
        }
        if (regexMedium.test(input.value)) {
            moyen.classList.add('active');
        } else {
            moyen.classList.remove('active');
        }
        if (regexFort.test(input.value)) {
            fort.classList.add('active');
        } else {
            fort.classList.remove('active');
        }



        // Ajout de la vérification du mot de passe confirmé
        if (confirmPassword.value !== "" && input.value === confirmPassword.value) {
            document.querySelector('.infoPass').textContent = 'Le mot de passe est identique';
            document.querySelector('.infoPass').style.color = '#4caf50';
        } else {
            document.querySelector('.infoPass').textContent = 'Le mot de passe ne correspond pas';
            document.querySelector('.infoPass').style.color = '#f44336';
        }
    } else {
        indicateurs.style.display = "none";
        icon.style.display = "none";
        faible.classList.remove('active');
        moyen.classList.remove('active');
        fort.classList.remove('active');
        // Réinitialisation du message d'information sur le mot de passe confirmé
        document.querySelector('.infoPass').textContent = '';
    }
}

icon.addEventListener('click', function () {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    icon.classList.toggle('active');
});

// Ajout de l'événement "keyup" sur le champ "confirmPassword"
confirmPassword.addEventListener('keyup', function() {
    trigger();
});
