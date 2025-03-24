"use strict";
// En général on utilise les interfaces avec les classes.
class RocketFactory {
    constructor(reactors, vMax, price, fuel) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.fuel = fuel;
    }
    takeOff(action) {
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12, 900, 2, 9000);
console.log(Falcon1);
Falcon1.takeOff('Décollage');
