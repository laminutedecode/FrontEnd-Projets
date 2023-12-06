const text = document.querySelector('h1');
const btn = document.querySelector('button');

function getValue(){
  const inp = document.querySelector('input').value;
  text.innerText = `Bienvenue ${inp} ! `;

}




btn.addEventListener('click', getValue)

