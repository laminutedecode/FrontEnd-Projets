const menu = document.querySelector('.list-nav');
const btnMenu = document.querySelector('.btn-toggle-container');

btnMenu.addEventListener('click', function () {
  menu.classList.toggle('active-menu')
})

    // toggle est une méthode qui ajouter ou enleve une class