import { Carta } from "./carta"
import { Jogador } from "./jogador";

export class BaralhoUno {
    private baralho: Carta[] = []

    baralhoInicial():void{

    }

    reembaralhar():void{

    }

    ultimaCarta(): Carta | undefined {
        return this.baralho[this.baralho.length - 1]
    }

    removeDoFinal(): Carta | undefined {
        return this.baralho.pop()
    }

    venderUmaCarta(): Carta{
        let cartaComprada = this.ultimaCarta()
        this.removeDoFinal()
        return cartaComprada 
    }

    estaVazia(): boolean {
        return this.baralho.length === 0;
    }
    
}

