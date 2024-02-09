const textarea = document.querySelector('textarea')


textarea.addEventListener('keyup', (e) => {
    textarea.style.height = `50px`
    let heightSize = e.target.scrollHeight;
    textarea.style.height = `${heightSize}px`
}) 