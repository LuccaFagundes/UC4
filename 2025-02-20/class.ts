export class Cat{
    // Atributos
    name:string;
    weight:number

    // Construtor
    constructor(nameCat:string,weightCat:number) {
        this.name = nameCat;
        this.weight = weightCat
    }
    

    // Métodos
    meow():void{
        console.log("Meow Meow")
    }

    eat(quantity:number):void{
        console.log("The cat has eaten " +quantity,"grams of rations");
    }
}

const Sempai = new Cat("Sempai",3)
const Dimenor = new Cat("Dimenor",4)

Sempai.meow();
Sempai.eat(150)
