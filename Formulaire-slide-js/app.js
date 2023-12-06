const login = document.querySelector('form.Fconnexion');
const signup = document.querySelector('form.Fsignup');
const loginBTN = document.querySelector('label.login');
const signupBTN = document.querySelector('label.signup');
const link = document.querySelector('.compte');
const titreC = document.querySelector('.titreCo');
const titreS = document.querySelector('.titreSi');

signupBTN.onclick = (() => {
  login.style.marginLeft = "-50%";
  titreC.style.marginLeft = "-150%";
});
loginBTN.onclick = (() => {
  login.style.marginLeft = "0%";
  titreC.style.marginLeft = "0%";
});
link.onclick = (() => {
  signupBTN.click();
  return false
});