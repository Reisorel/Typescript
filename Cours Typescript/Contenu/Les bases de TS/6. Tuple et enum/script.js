"use strict";
// Tuple
// Type spécifique permettant de définiur un tableau à longueur fixe avec type précis dans chaque élément.
// Taile fixe, ordre strict, accès aux éléments.
// Permet de garantir la précision des types
let wario;
// Affectation conforme au type défini
wario = [false, 20];
// Défualt de tuple : on peut y ajouter des éléments averc push
wario.push(4);
console.log(wario);
// Tentative d'affectation incorrecte
wario = [20, true]; // ❌ Erreur : L'ordre des types est incorrect
wario = [false, 20, 30]; // ❌ Erreur : Trop d'éléments
wario = [false]; // ❌ Erreur : Il manque un élément
// Enum
// Def : type spécial qui permet d’assigner des noms à des valeurs numériques ou textuelles, rendant le code plus lisible et facile à maintenir
// Numérotation automatique
// Recherche inversée. Vouloir récupérer le nom des valeurs. 
const Roles1 = {
    JAVASCRIPT: 1,
    CSS: 2,
    PHP: 3,
};
// Fait le même travail que l'objet. Démarre à 0.
var Roles2;
(function (Roles2) {
    Roles2[Roles2["JAVASCRIPT"] = 0] = "JAVASCRIPT";
    Roles2[Roles2["CSS"] = 1] = "CSS";
    Roles2[Roles2["REACT"] = 2] = "REACT";
})(Roles2 || (Roles2 = {}));
console.log(Roles2[0]);
console.log(Roles2.JAVASCRIPT);
