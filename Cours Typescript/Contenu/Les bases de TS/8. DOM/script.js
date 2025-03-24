"use strict";
// Le DOM  avec TS
// il y a un type pour chaque élément HTML
// Type assertion
let txt;
txt = "str";
//Assertion avec type HTML et !
const form = document.querySelector("form");
console.log(form.children);
//Type casting
const form2 = document.querySelector("form");
console.log(form.children);
const input = document.querySelector("input");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault(); // Empêche la page de se recharger.
    console.log("Submitted!");
}
window.addEventListener("click", handlClick);
// MouseEvent permet d'avoir un type pour l'action de relever la position de la souris
function handlClick(event) {
    console.log(event.clientX, event.clientY);
}
// Pour les querySelectorAll, pas besoin de typecasting, ⚠️ overkill 
const paragraphList = document.querySelectorAll('p');
console.log(paragraphList);
