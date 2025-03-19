let str = ""
let num = 5
let array = []
let obj = {
  a: 5
}
let toggle = true


let anything;
anything = 10;
let randomNumber : number; // Valide qu'il est un nombre.
randomNumber = 99 // Permet de lui assigner uniquement des nombres et pas d'autres types.

// Ici le paramètre de la fonction conversion celsius est assignée à un type.
const conversion = (celsius : number) => {
    return(celsius * 9/5) + 32;
}

console.log(conversion(10));
