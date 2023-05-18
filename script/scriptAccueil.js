console.log("scriptAccueil.js chargé");

var formulaire = document.getElementById("formulaireAccueil");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    var nom = formulaire.elements.nom.value;
    var email = formulaire.elements.email.value;

    console.log("Formulaire soumis");
    console.log("Nom :", nom);
    console.log("Email :", email);
    alert("Merci " + nom + " pour votre inscription !");
});
