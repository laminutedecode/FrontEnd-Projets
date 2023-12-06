let txt = document.querySelector('button span');
let button = document.querySelector('button');
let info = document.querySelector('button div');
let close = document.querySelector('.croix');

txt.addEventListener('click', function () {
    this.classList.add('active');
    button.classList.add('active');
    info.classList.add('active');
})

close.addEventListener('click', function (){
    info.classList.remove('active');
    txt.classList.remove('active');
    button.classList.remove('active');
})