const form = document.querySelector('form');
const input = document.querySelector('input');
const erreur = document.querySelector('.message-erreur');
const load = document.querySelector('.loader');
const resultat = document.querySelector('.resultat');
const resultatContainer = document.querySelector('.cont-resultats');

resultat.style.display= `none`

form.addEventListener('submit', funcForm);


function funcForm(e){
  e.preventDefault();

  if(!input.value === ""){
    erreur.innerText = `Il y a eu une erreur innatendue, veuillez rééssayer plus tard`;
    resultat.style.display= `none`
    return;
  }else {
    erreur.textContent = ``;
    load.style.display = 'flex';
    resultat.style.display= `none`

    // ceci est pour reset le contenu en cas de rerecherche
    resultatContainer.textContent = ``;

  wikipediaAPI(input.value);
  }
}
// assync pour attendre le resultat avant de créerdes cartes
async function wikipediaAPI(recherche){
  try{
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${recherche}`);
    console.log(response.ok);
    if(!response.ok){
      throw newError(`${response.status}`)
    }
    const data = await response.json();
    // cette variable va analyser le json et le transformer en js
    console.log(data);

    card(data.query.search);
  } catch (error){
    erreur.textContent = `${error}`
    load.style.display = "none";
    resultat.style.display= `none`
  }
}
 

function card(data){
  if(!data.length){
    erreur.innerText = `Il y a eu une erreur innatendue, veuillez rééssayer plus tard`;
    load.style.display = "none";
    resultat.style.display= `block`
    return;
  }
  data.forEach(card => {
    const url = `https://en.wikipedia.org/?curid=${card.pageid}`;
    const nvCard = document.createElement('div');
    nvCard.className = "resultat";
    nvCard.innerHTML = `
     <h3 class="resultat-titre">
        <a href=${url} target="_blank">${card.title}</a>
      </h3>
      <a href=${url} class="resultat-lien" target="_blank">${url}</a>
      <span class="resultat-snippet">${card.snippet}</span>
      <br>
    `;
    resultatContainer.appendChild(nvCard);
  });
  load.style.display = "none"; 

}