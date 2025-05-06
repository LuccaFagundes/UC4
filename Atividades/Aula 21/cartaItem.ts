import { Carta } from "./carta";

export class CartaItem extends Carta {
    efeito: string

    constructor(nome: string, tipo: string, efeito: string) {
        super(nome, tipo)
        this.efeito = efeito
    }
}