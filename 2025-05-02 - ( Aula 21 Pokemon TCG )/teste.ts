export class Carta {
    constructor(public nome: string, public tipo: string) {}
  
    exibirCarta(): void {
      ;
    }
  }
  
  // Subclasses
  export class CartaPokemon extends Carta {
    constructor(nome: string, tipo: string, public ataque: number, public hp: number) {
      super(nome, tipo);
    }
  
    exibirCarta(): void {
      console.log(`O pokemon ${this.nome}, tem como seu tipo `);
    }
  }

const newcarta = new CartaPokemon('teste', 'grama', 120,120)

console.table(newcarta)