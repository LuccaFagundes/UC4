import { Animal } from "./abstractAnimal";

class Cat extends Animal{
    makeSound(): void {
        console.log(`${this.name} goes: MAWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱`)
    }
}

let Sempai = new Cat("Sempai")
Sempai.makeSound()