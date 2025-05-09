import { Carta } from "./carta";

export class Tabuleiro {
  private mao: Carta[] = [];
  private descarte: Carta[] = [];

  adicionarCartaMao(carta: Carta): void {
    this.mao.push(carta);
  }

  descartarCarta(): void {
    if (this.mao.length > 0) {
      const descartada = this.mao.pop()!;
      this.descarte.push(descartada);
    }
  }

  exibirMao(): void {
    console.log("Mão:");
    this.mao.forEach(c => c.exibirCarta());
  }

  exibirDescarte(): void {
    console.log("Descarte:");
    this.descarte.forEach(c => c.exibirCarta());
  }
}