import { Carta } from "./carta";

export class CartaPokemon extends Carta {
    ataque: number
    vida: number

    constructor(nome: string, tipo: string, ataquePokemon: number, vidaPokemon: number) {
        super(nome, tipo)
        this.ataque = ataquePokemon
        this.vida = vidaPokemon
    }
}