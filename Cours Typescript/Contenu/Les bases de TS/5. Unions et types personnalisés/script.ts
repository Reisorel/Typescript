// Unions

// Un élément peut avoir plusieurs types possibles grâce au type union (|)
let code: string | number | boolean | object;
code = "6"; // ✅ Valide (code peut être un string)
code = 42; // ✅ Valide (code peut être un number)
code = true; // ✅ Valide (code peut être un boolean)
code = { key: "value" }; // ✅ Valide (code peut être un object)

// Ici exemple avec un tableau
let arr: (boolean | number)[];
arr = [true, false, 999];

// Une fonction acceptant un paramètre qui peut être soit un string soit un number
const foo = (param: number | string) => {
  console.log(param);
};
foo("Strokes");
foo(477);


// Types perso

// Définition de types personnalisés (alias de types)
type mixedNumbrStr = number | string; // Peut être un nombre ou une chaîne de caractères
type booleanOrObject = boolean | object // Peut être un booléen ou un objet

// Utilisation des types personnalisés dans un paramètre de fonction
// Le paramètre `param` peut être soit un nombre, une chaîne de caractères, un booléen ou un objet
const baz = (param: mixedNumbrStr | booleanOrObject) => {
  console.log(param);
};
baz("LedZep");
baz(788);
baz(true);

// Définition d'un type personnalisé pour un objet avec des propriétés typées

// Initialisation du typage de element (avec ; entre chaque élément)
type element = {
  x: number;
  y: number;
  id: number | string;
  visible: boolean;
}

// Création d'un objet respectant la structure définie par le type `Element`
const button : element = {
x: 99,
y: 50,
id: "Dave",
visible: true,
}
