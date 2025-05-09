import { Carta } from "./carta";

export class Baralho {
  private pilha: Carta[] = [];

  embaralhar(cartas: Carta[]): void {
    for (let i = cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    this.pilha = cartas;
  }

  comprarCarta(): Carta | undefined {
    return this.pilha.pop();
  }

  visualizarTopo(): Carta | undefined {
    return this.pilha[this.pilha.length - 1];
  }
}