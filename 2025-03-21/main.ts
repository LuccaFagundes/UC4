import { Level } from "./level";
import { Survivor } from "./survivor";


let mySurvivor1 = new Survivor();
let mySurvivor2 = new Survivor(Level.orange);


console.log(mySurvivor1.getLevel());
console.log(mySurvivor2.getLevel());
