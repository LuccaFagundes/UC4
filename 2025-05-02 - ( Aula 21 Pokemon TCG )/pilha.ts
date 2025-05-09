import { Carta } from "./carta";

export class Pilha {
    private elements: Carta[] = [];

    // Empurra um elemento para a pilha
    push(Carta): void {
        this.elements.push(Carta)
    }
    // Apaga o ultimo elemento da pilha
    pop(): Carta {
        return this.elements.pop()
    }
    // Mostra o ultimo elemento da pilha
    peek(): Carta {
        return this.elements[this.elements.length - 1]
    }
    // Checa o tamanho da pilha
    size(): number {
        return this.elements.length
    }

    comprar(pilha1: Pilha, pilha2: Pilha){
        let compra = pilha1.peek()
        pilha1.pop();
        pilha2.push(compra)
    }

    descartar(cartaUsada:number, pilha1: Pilha, pilha2: Pilha){
        
    }
};



