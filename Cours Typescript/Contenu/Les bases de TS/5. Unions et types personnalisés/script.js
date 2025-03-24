"use strict";
// Unions
// Un élément peut avoir plusieurs types possibles grâce au type union (|)
let code;
code = "6"; // ✅ Valide (code peut être un string)
code = 42; // ✅ Valide (code peut être un number)
code = true; // ✅ Valide (code peut être un boolean)
code = { key: "value" }; // ✅ Valide (code peut être un object)
// Ici exemple avec un tableau
let arr;
arr = [true, false, 999];
// Une fonction acceptant un paramètre qui peut être soit un string soit un number
const foo = (param) => {
    console.log(param);
};
foo("Strokes");
foo(477);
// Utilisation des types personnalisés dans un paramètre de fonction
// Le paramètre `param` peut être soit un nombre, une chaîne de caractères, un booléen ou un objet
const baz = (param) => {
    console.log(param);
};
baz("LedZep");
baz(788);
baz(true);
// Création d'un objet respectant la structure définie par le type `Element`
const button = {
    x: 99,
    y: 50,
    id: "Dave",
    visible: true,
};
