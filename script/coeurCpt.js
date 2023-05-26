console.log("coeurCpt.js chargé");

if (localStorage.getItem("nombreDeJaime") == null){
    localStorage.setItem("nombreDeJaime", "0");
}
let btn = document.getElementById("btn");
let texte = document.getElementById("nombre");

texte.textContent = localStorage.getItem("nombreDeJaime");

console.log(btn);

btn.addEventListener("click", function () {

    let nombreDeJaime = localStorage.getItem("nombreDeJaime");

    localStorage.setItem("nombreDeJaime",parseInt(nombreDeJaime) + 1);

    texte.textContent = localStorage.getItem("nombreDeJaime");});