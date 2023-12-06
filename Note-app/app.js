// Sélection des éléments HTML
const addBox = document.querySelector(".add-note"); // Sélectionne l'élément avec la classe "add-note"
const popupBox = document.querySelector(".modal-container"); // Sélectionne l'élément avec la classe "modal-container"
const popupTitle = popupBox.querySelector(".modal-header p"); // Sélectionne le paragraphe dans l'élément avec la classe "modal-header"
const closeIcon = popupBox.querySelector(".close"); // Sélectionne l'élément avec la classe "close"
const titleTag = popupBox.querySelector("#title"); // Sélectionne l'élément avec l'id "title"
const descTag = popupBox.querySelector("#description"); // Sélectionne l'élément avec l'id "description"
const addBtn = popupBox.querySelector("button"); // Sélectionne le bouton dans l'élément popupBox

// Tableau des mois
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

// Chargement des notes depuis le stockage local
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

// Variables pour la mise à jour des notes
let isUpdate = false; // Indique si la note est en cours de mise à jour
let updateId; // Stocke l'ID de la note en cours de mise à jour

// Écouteur d'événement pour l'ouverture de la boîte de dialogue d'ajout de note
addBox.addEventListener("click", () => {
    // Mise en place des éléments de la boîte de dialogue d'ajout
    popupTitle.innerText = "Ajouter une note";
    addBtn.innerText = "Ajouter";
    popupBox.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
    if (window.innerWidth > 660) titleTag.focus(); // Met le focus sur le champ de titre si la largeur de la fenêtre est suffisante
});

// Écouteur d'événement pour la fermeture de la boîte de dialogue
closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = descTag.value = ""; // Réinitialisation des champs
    popupBox.classList.remove("active");
    document.querySelector("body").style.overflow = "auto";
});

// Fonction pour afficher les notes
function showNotes() {
    if (!notes) return; // Si aucune note n'existe, ne rien faire
    document.querySelectorAll(".box-note").forEach(li => li.remove()); // Supprime toutes les notes affichées actuellement
    notes.forEach((note, id) => {
        // Génère le code HTML pour chaque note à afficher
        let filterDesc = note.description.replaceAll("\n", '<br/>');
        let liTag = `<li class="box-note"> <!-- Conteneur de la note -->
                        <div class="details-note"> <!-- Détails de la note -->
                            <p>${note.title}</p> <!-- Titre de la note -->
                            <span>${filterDesc}</span> <!-- Description de la note -->
                        </div>
                        <div class="footer-note"> <!-- Pied de la note -->
                            <span>${note.date}</span> <!-- Date de la note -->
                            <div class="options"> <!-- Options de la note -->
                                <ion-icon onclick="showMenu(this)" name="settings-outline"></ion-icon> <!-- Icône pour afficher le menu -->
                                <ul class="menu-options"> <!-- Menu d'options -->
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><ion-icon name="pencil-outline"></ion-icon> Editer</li> <!-- Option d'édition -->
                                    <li onclick="deleteNote(${id})"><ion-icon name="trash-outline"></ion-icon>Supprimer</li> <!-- Option de suppression -->
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag); // Insère le code HTML généré après l'élément "addBox"
    });
}

// Affiche les notes au chargement de la page
showNotes();

// Fonction pour afficher le menu contextuel des options
function showMenu(elem) {
    elem.parentElement.classList.add("active"); // Ajoute la classe "active" pour afficher le menu
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("active"); // Supprime la classe "active" si un clic est détecté en dehors de l'icône
        }
    });
}

// Fonction pour supprimer une note
function deleteNote(noteId) {
    let confirmDel = confirm("Voulez-vous vraiment supprimer cette note?");
    if (!confirmDel) return; // Si l'utilisateur annule la suppression, ne rien faire
    notes.splice(noteId, 1); // Supprime la note du tableau
    localStorage.setItem("notes", JSON.stringify(notes)); // Met à jour le stockage local
    showNotes(); // Met à jour l'affichage des notes
}

// Fonction pour mettre à jour une note
function updateNote(noteId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n'); // Convertit les sauts de ligne HTML en sauts de ligne normaux
    updateId = noteId; // Stocke l'ID de la note à mettre à jour
    isUpdate = true; // Active le mode de mise à jour
    addBox.click(); // Simule un clic sur "addBox" pour ouvrir la boîte de dialogue d'ajout de note
    titleTag.value = title; // Remplit le champ de titre avec le titre existant de la note
    descTag.value = description; // Remplit le champ de description avec la description existante de la note
    popupTitle.innerText = "Modifier note"; // Met à jour le titre de la boîte de dialogue
    addBtn.innerText = "Modifier"; // Met à jour le texte du bouton
}

// Écouteur d'événement pour le clic sur le bouton "Ajouter" ou "Modifier"
addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim(); // Récupère et nettoie le titre saisi
    let description = descTag.value.trim(); // Récupère et nettoie la description saisie

    if (title || description) { // Si au moins l'un des champs est rempli
        let currentDate = new Date();
        let month = months[currentDate.getMonth()];
        let day = currentDate.getDate();
        let year = currentDate.getFullYear();
        
        let noteInfo = { title, description, date: `${day} ${month} ${year}` }; // Crée un objet avec les informations de la note

        if (!isUpdate) { // Si l'ajout d'une nouvelle note
            notes.push(noteInfo); // Ajoute la note au tableau
        } else { // Si la mise à jour d'une note existante
            isUpdate = false; // Désactive le mode de mise à jour
            notes[updateId] = noteInfo; // Met à jour la note existante dans le tableau
        }

        localStorage.setItem("notes", JSON.stringify(notes)); // Met à jour le stockage local
        showNotes(); // Met à jour l'affichage des notes
        closeIcon.click(); // Ferme la boîte de dialogue
    }
});
