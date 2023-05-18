console.log("scriptAlbum.js loaded");

var formulaire = document.getElementById("formulaireAlbum");
var inputImage = document.getElementById("image");
var subcontainer = document.getElementById("subcontainer");

console.log(subcontainer);
formulaire.addEventListener("submit", function(event) {
    event.preventDefault();
    var image = inputImage.files[0];
    console.log("Formulaire soumis");
    console.log("Image :", image); // Affiche l'objet File dans la console
    var newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(image);
    newImage.className = "imageDesUser";
    subcontainer.appendChild(newImage);
});

