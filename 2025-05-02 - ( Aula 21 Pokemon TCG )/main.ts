import { Carta } from "./carta";
import { Pilha } from "./pilha";

const cartaTeste1= new Carta("Teste1", "tipo1")
const cartaTeste2 = new Carta("Teste2", "tipo2")

const baralho1 = new Pilha();
const mao1 = new Pilha();

baralho1.push(cartaTeste1);
baralho1.push(cartaTeste2);

baralho1.comprar(baralho1,mao1)
console.log(mao1)
