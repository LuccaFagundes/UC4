import { FilaTemporal } from "./filaTemporal";
import { PersonagemTemporal } from "./personagemTemporal";

const tobeyMaguire = new PersonagemTemporal("Homem-Aranha", "96283", 2)
const andrewGarfield = new PersonagemTemporal("Homem-Aranha","120783",3)
const tomHolland = new PersonagemTemporal("Homem-Aranha", "616", 1)

const filaTemporal1 = new FilaTemporal([tobeyMaguire,andrewGarfield,tomHolland])

tomHolland.exibirInfo();

filaTemporal1.enfileirarHerois(tobeyMaguire)
filaTemporal1.enfileirarHerois(andrewGarfield)
filaTemporal1.enfileirarHerois(tomHolland)

console.log(filaTemporal1.estaVazia())
filaTemporal1.primeiroHeroiDaFila()

