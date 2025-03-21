export class Cat{
    // Atributos
    public name:string;
    protected race:string;
    private weight:number;

    constructor(nameCat:string,raceCat:string, weightCat:number){
        this.name = nameCat
        this.race = raceCat
        this.weight = weightCat
    };

    // Métodos
    public setName(nomeCat:string):void{ this.name = nomeCat };

    public getName():string{return this.name};
    
    public meow():void{ console.log("Meow Meow");
        console.log(this.showRace());
        console.log(this.revealWeight());
    } 
    public eat(quantity:number):void{ console.log("The cat has eaten " +quantity+ " grams of rations")};

    protected showRace():string{ return this.race };
    protected revealWeight():number{return this.weight}
}

const Sempai = new Cat("Sempai","WTH",8);
Sempai.meow();
Sempai.eat(400);
// Sempai.showRace();
// Sempai.revealWeight();



