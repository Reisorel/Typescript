"use strict";
// Typer les paramètres d'un fonction
// Penser à survoler
// Ici :number après les parenthèses indique que la fonction retourne un number
function multiply(num1, num2 = 10, action) {
    if (action)
        console.log(action);
    return num1 * num2;
}
console.log(multiply(6, 10, "create"));
let foo;
foo = () => { };
// Function signatures
let baz;
baz = (a, b) => a + b;
// Function callback
function greetings(fn) {
    fn("Hello ma boy");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
