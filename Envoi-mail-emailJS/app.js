// initialiser EmailJS avec votre user ID
emailjs.init('rfPxlxRAtZTjsfmek');

// récupérer le formulaire
const form = document.forms.formContact;

// écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // empêcher le comportement de soumission par défaut

  // récupérer les valeurs du formulaire
  const prenom = form.elements.prenom.value;
  const nom = form.elements.nom.value;
  const email = form.elements.email.value;
  const tel = form.elements.tel.value;
  const message = form.elements.message.value;

  // construire l'objet de données pour l'email
  const data = {
    prenom: prenom,
    nom: nom,
    email: email,
    tel: tel,
    message: message
  };

  // envoyer l'email en utilisant EmailJS
  emailjs.send('service_8di3h09', 'template_nknad6c', data)
    .then(function(response) {
      console.log('Email envoyé avec succès !', response);
      alert('Votre message a bien été envoyé !');
      form.reset(); // réinitialiser le formulaire
    }, function(error) {
      console.log('Erreur lors de l\'envoi de l\'email', error);
      alert('Une erreur est survenue lors de l\'envoi de votre message.');
    });
});
