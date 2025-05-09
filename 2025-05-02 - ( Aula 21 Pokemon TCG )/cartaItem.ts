import { Carta } from "./carta";

export class CartaItem extends Carta {
    constructor(nome: string, tipo: string, public efeito: string) {
        super(nome, tipo);
    }

    exibirCarta(): void {
        console.log();
    }
}