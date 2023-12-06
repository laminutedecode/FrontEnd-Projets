const btnModal = document.querySelector('.btn-modal')
const modale = document.querySelector('.container')
const btnClose = document.querySelector('.close')



btnModal.addEventListener('click', () => {
    modale.classList.add('active')
})

btnClose.addEventListener('click', () => {
    modale.classList.remove('active')
}) 