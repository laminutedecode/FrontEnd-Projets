const citation = document.querySelector("#citation");
const bouton = document.querySelector("#nouvelle-citation");

function genererCitation() {
  fetch('https://api.quotable.io/random?langage=fr')
    .then(response => response.json())
    .then(data => {
      citation.innerHTML = `<span>${data.content}</span> - ${data.author}`;
    })
    .catch(err => {
      console.error(err);
      citation.innerHTML = "Une erreur s'est produite lors de la récupération de la citation.";
    });
}

genererCitation();

bouton.addEventListener("click", genererCitation);
