const box = document.querySelector('.wrapper'),
 btnValidation = document.querySelector('.btns button')


 btnValidation.onclick = () => {
    console.log("Tu as cliqué");
    document.cookie = "CookieB=MinuteDeCode  max-age"+60*60*24*30;

    if(document.cookie){
        box.classList.add('hide');

    }else {
        alert('Il y a eu une erreur')
    }
 }


 let check = document.cookie.indexOf("CookieB=MinuteDeCode")


check  != -1 ?  box.classList.add('hide') :  box.classList.remove('hide');

