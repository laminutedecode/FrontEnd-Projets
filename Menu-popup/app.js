const container = document.querySelector('.menu-container')
const btn = document.querySelector('.burger')

btn.addEventListener('click', () => {
  container.classList.toggle('active')
}) 