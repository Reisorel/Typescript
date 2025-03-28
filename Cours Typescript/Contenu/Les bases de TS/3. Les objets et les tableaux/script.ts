
// Tableaux :
const fruits = ['fraise', 'pommes',]
fruits.push("cerises", "fraises")

console.log(fruits);

// Tableau mixte personnalisé/ N'accepte que les types déjà inférés.
const mixedArray = [1, 'txt', [1,2,3,4]]
mixedArray.push([2,3,4], "Hello")
console.log(mixedArray);

let nums : number [];
// nums.push(1) // erreur
nums = [1, 2, 3]

// ici le tableau est instancié à la base
let nums2 : number [] = []
nums2.push(2)
console.log(nums2);


let random : any [];
random = [true, false, 12]
console.log(random);

// Objets :

const car = {
  name: "Audi",
  model: "A1",
  km: 7000
}

// car.name = 1 : erreur car pas le bon type.
car.name = "BMW"
console.log(car);


let profile : {
  name: string,
  age: number
  hobbies: [],
}

profile = {
  name: "John",
  age: 85,
  hobbies: [],
}

console.log(profile);


let user : {
  name: string,
  age: number
  favFood: string[],
  data: any,
} = {
  name: "Joe",
  age: 45,
  favFood: ['pasta', 'cheese'],
  data: 50,
}

console.log(user);


let obj : object

obj = {name: "Donatello"}
console.log(obj);
