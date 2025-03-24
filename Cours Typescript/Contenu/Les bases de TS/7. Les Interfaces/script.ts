// Les interfaces ressemblent beaucoup aux types personnalisés
// Permet de créer un objet avec des propriétés qui vont recevoir un certain type
// Les interfaces sont très couvent utilisées avec les classes.
interface rocket {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
}

// On peut ajouter des propriétés
// Contrairement aux types, les interfaces peuvent être étendues et fusionnées si elles portent le même nom.
interface rocket {
  price: number;
  fuel: number;
}

// En général on utilise les interfaces avec les classes.

class RocketFactory implements rocket {
  reactors: number;
  vMax: number;
  price: number;
  fuel: number;

  constructor(reactors: number, vMax: number, price: number, fuel: number) {
    this.reactors = reactors;
    this.vMax = vMax;
    this.price = price;
    this.fuel = fuel;
  }
  takeOff(action: string) {
    console.log(action);
  }
}

const Falcon1 = new RocketFactory(12, 900, 2, 9000)
console.log(Falcon1);

Falcon1.takeOff('Décollage')


type Rocket2 = {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
};
