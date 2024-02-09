const indicateurs = document.querySelector('.indicateurs');
const input = document.querySelector('input');
const faible = document.querySelector('.indicateurs span:nth-child(1)');
const moyen = document.querySelector('.indicateurs span:nth-child(2)');
const fort = document.querySelector('.indicateurs span:nth-child(3)');
const icon = document.querySelector('.box span');

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
    } else {
        indicateurs.style.display = "none";
        icon.style.display = "none";
        faible.classList.remove('active');
        moyen.classList.remove('active');
        fort.classList.remove('active');
    }
}

icon.addEventListener('click', function () {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    icon.classList.toggle('active');
    
});
