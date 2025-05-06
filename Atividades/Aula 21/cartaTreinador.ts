import { Carta } from "./carta";

export class CartaTreinador extends Carta{
    descricao:string

    constructor(nome: string, tipo: string, descricao: string) {
        super(nome, tipo)
        this.descricao = descricao
    }
}