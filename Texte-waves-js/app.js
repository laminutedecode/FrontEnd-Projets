const text = document.querySelectorAll('p')


text.forEach(txt => {
    txt.innerHTML = txt.textContent.split('').map((txt, wave) => `<span style="transition-delay: ${wave * 25}ms">${txt}</span>`).join('')
})