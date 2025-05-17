import { Carta } from "./carta";

let pilha = []
let baralho = []
import { BaralhoUno } from "./baralhoUno";

export abstract class Jogador{
    mao: Carta[] = []

    comprarCarta(baralho: BaralhoUno): void{
        this.mao.push(baralho.venderUmaCarta())
    }

    jogarCarta(carta: number): void{
        pilha.push(this.mao[carta])
        this.mao.splice(carta, 1)
    }

    maoVazia(): boolean{
        return this.mao.length === 0
    }
}