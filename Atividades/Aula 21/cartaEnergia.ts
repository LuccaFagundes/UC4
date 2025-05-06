import { Carta } from "./carta";

export class CartaEnergia extends Carta {
    valor: number

    constructor(nome: string, tipo: string, valor: number) {
        super(nome, tipo)
        this.valor = valor
    }
}