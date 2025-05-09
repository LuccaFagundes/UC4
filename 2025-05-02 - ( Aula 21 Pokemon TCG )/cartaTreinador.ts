import { Carta } from "./carta";

export class CartaTreinador extends Carta {
    constructor(nome: string, tipo: string, public descricao: string) {
        super(nome, tipo);
    }

    exibirCarta(): void {
        console.log();
    }
}