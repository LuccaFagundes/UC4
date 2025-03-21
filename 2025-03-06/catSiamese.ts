import { Cat } from "./cat";

export class Siamese extends Cat{

    public showRaceSiamese():string{
        return this.showRace();
    }
}

let myCat = new Siamese("Sempai","Orange",1110)
console.log(myCat.showRaceSiamese());