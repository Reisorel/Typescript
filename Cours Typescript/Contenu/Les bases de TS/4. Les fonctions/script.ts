// Typer les paramètres d'un fonction
// Penser à survoler
// Ici :number après les parenthèses indique que la fonction retourne un number
function multiply(num1 : number, num2 = 10, action?: string) : number  {
  if(action) console.log(action);
  return num1 * num2
}

console.log(multiply(6,10,"create"));


let foo: Function;
foo = () => {}

// Function signatures
let baz: (a : number, b:number) => number;

baz = (a,b) => a + b;

// Function callback
function greetings(fn : (a: string) => void) {
  fn("Hello ma boy")
}

function printToConsole(msg: string) {
  console.log(msg);
}

greetings(printToConsole)
