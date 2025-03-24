// Le DOM  avec TS
// il y a un type pour chaque élément HTML
// Type assertion
let txt: string;
txt = "str";

//Assertion avec type HTML et !
const form: HTMLFormElement = document.querySelector("form")!;
console.log(form.children);

//Type casting
const form2 = document.querySelector("form") as HTMLFormElement;
console.log(form.children);
const input = document.querySelector("input") as HTMLInputElement;
form.addEventListener("submit", handleSubmit);

function handleSubmit(event: Event) {
  event.preventDefault(); // Empêche la page de se recharger.
  console.log("Submitted!");
}

window.addEventListener("click", handlClick);


// MouseEvent permet d'avoir un type pour l'action de relever la position de la souris
function handlClick(event: MouseEvent) {
  console.log(event.clientX, event.clientY);
}
// Pour les querySelectorAll, pas besoin de typecasting, ⚠️ overkill 
const paragraphList = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.log(paragraphList);
