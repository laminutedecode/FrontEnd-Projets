const input = document.querySelector('.password')
const show = document.querySelector('.show')

show.addEventListener('click', visibility) 
function visibility (){
    if(input.type === "password"){
        input.type = "text";
        show.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`
    }else {
        input.type = "password";
        show.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`
    }
}