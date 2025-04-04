
interface Animal{
    name: string
    
    makeSound():void
}

class Dog implements Animal{
    name: string

    constructor(nameReceived:string){
        this.name = nameReceived
    }

    makeSound(): void {
    console.log(`${this.name} goes: woof woof!`)
    }
}

interface Flier{
    flies():void
}

interface Swimmer{
    swims():void
}

let dog2 = new Dog("SemNome")
dog2.makeSound()

class Duck implements Animal,Flier,Swimmer{
    name: string
    constructor(nameReceived:string){
        this.name = nameReceived
    }

    makeSound(): void {
        console.log(`${this.name} goes: QUACK QUACK!!!`)
    }

    flies(): void {
        console.log(`${this.name} is flying`)
    }

    swims(): void {
        console.log(`${this.name} is swimming.`)
    }
}

let myDuck = new Duck("Gargamel")
myDuck.makeSound()
myDuck.flies()
myDuck.swims()

interface Lista<T>{
    adicionar(item:T):void;
    remover(item:T):void;
    tamanho():number;
}

class ListaNumerica implements Lista<number>{
    private items:number[] = [];
    
    adicionar(item: number): void {
     this.items.push(item);    
    }

    remover(item: number): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    tamanho(): number {
        return this.items.length
    }
}

let myList = new ListaNumerica();
myList.adicionar(5);
myList.adicionar(2);
console.log(myList.tamanho())