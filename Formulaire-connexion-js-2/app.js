const form = document.querySelector('form'),
fieldEmail = form.querySelector('.email'),
inputEmail = form.querySelector('#email'),
validTxtEmail = document.querySelector('.valid-txt-email'),
fieldPassword = form.querySelector('.password'),
inputPassword = form.querySelector('#password'),
validTxtPassword = document.querySelector('.valid-txt-password');



let icon = document.querySelector('ion-icon.key-pass');
icon.addEventListener('click', () => {
    if (icon.getAttribute('name') === 'eye-outline') {
        icon.setAttribute('name', 'eye-off-outline');
        inputPassword.type = 'password';
    } else {
        icon.setAttribute('name', 'eye-outline');
        inputPassword.type = 'text';
    }
}) 

form.onsubmit = (e)=> {
    e.preventDefault();


if(inputEmail.value == ""){
    fieldEmail.classList.add('validation', 'active');
}else {
    check()
}
if(inputPassword.value == ""){
    fieldPassword.classList.add('validation', 'active')
}

setTimeout(()=> {
    fieldEmail.classList.remove('validation');
    fieldPassword.classList.remove('validation')
}, 700)

inputEmail.onkeyup = ()=> {
check()
}

function check() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!inputEmail.value.match(pattern)){
        fieldEmail.classList.add('active');
        let error = fieldEmail.querySelector('.error-txt');
        (inputEmail.value != "") ? error.innerText = "Entrez une adresse e-mail valide" : error.innerText = "Entrez une adresse e-mail";
        validTxtEmail.classList.remove('active')
    }else {
        fieldEmail.classList.remove('active');
        validTxtEmail.classList.add('active')
    }
}

inputPassword.onkeyup = () => {
    if(inputPassword.value == ""){
        fieldPassword.classList.add('active');
        validTxtPassword.classList.remove('active')
    }else {
        fieldPassword.classList.remove('active');
        validTxtPassword.classList.add('active')
    }
}

}



