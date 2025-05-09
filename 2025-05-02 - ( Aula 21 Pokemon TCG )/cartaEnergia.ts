import { Carta } from "./carta";

export class CartaEnergia extends Carta {
    constructor(nome: string, tipo: string, public valor: number) {
        super(nome, tipo);
    }

    exibirCarta(): void {
        console.log();
    }
}