import { Animal } from "./animalherança";

export class Cat extends Animal {

    constructor(nameCat:string, weightCat:number){
        super(nameCat, weightCat);
    }

    meow():void{
        console.log(" meow meow 🐱")
    }

}

function realizaAcao(qualquerAnimal : Animal) {
    qualquerAnimal.eat(10);    
}

let meuAnimal = new Animal("ANIMAL1",50);
let meuGato = new Cat("Sempai",4);
realizaAcao(meuGato);
