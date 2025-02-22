export class Cat{
    // Atributos
    private name:string;
    private weight:number

    // Métodos
    setName(nomeCat:string):void{
        this.name = nomeCat;
    }

    getName():string{return this.name}
    
    meow():void{
        console.log("Meow Meow")
    }

    eat(quantity:number):void{
        console.log("The cat has eaten " +quantity,"grams of rations");
    }
}

const Sempai = new Cat()
Sempai.setName('Sempai')

Sempai.meow();
Sempai.eat(150)



