import { Carta } from "./carta";

export class CartaPokemon extends Carta {
    constructor(nome: string, tipo: string, public ataque: number, public hp: number) {
        super(nome, tipo);
    }

    exibirCarta(): void {
        console.log(`O pokemon ${this.nome}, tem como seu tipo ${this.tipo}.`);
    }
}