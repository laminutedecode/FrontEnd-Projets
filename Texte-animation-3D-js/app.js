const spans = document.querySelectorAll('.title div')

spans.forEach( span => {
  const letters = span.children[0].textContent.split('');
  span.innerHTML = ``;
  letters.forEach((el, index)=> {
    span.innerHTML += `<span style="transition-delay: ${0.07 * index}s">${el}</span>`
  })
})