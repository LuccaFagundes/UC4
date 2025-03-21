export class Animal {
    protected name : string;
    protected weight : number;

    constructor(nameConst:string, weightConst:number){
        this.name = nameConst;
        this.weight = weightConst
    }

    eat(quantity:number):void{
        console.log(`The animal has eaten: ${quantity}`)
    }
}