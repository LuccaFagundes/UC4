import { Animal } from "./abstractAnimal"

class Dog extends Animal{
    makeSound(): void {
        console.log(`${this.name} goes: Woof Woof!`)
    }
}

let dog1 = new Dog("SemNome")
dog1.makeSound()