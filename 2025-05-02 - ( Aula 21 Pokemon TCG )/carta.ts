
export class Carta {
  constructor(public nome: string, public tipo: string) { }

  exibirCarta(): void {
    console.log(`${this.nome}, ${this.tipo}`);
  }
}