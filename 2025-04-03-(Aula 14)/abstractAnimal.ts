
export abstract class Animal {
    name:string;

    constructor(nameReceived:string){
        this.name = nameReceived
        }
    abstract makeSound():void
}

