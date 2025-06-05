import { Pessoa } from "./pessoa";
import { ArvoreGenealogica } from "./arvoreGenealogica";
import { Relacionavel } from "./pessoa";
const eu = new Pessoa("Lucca", "Fagundes", "20/12/2003", 'Masculino')
const pai = new Pessoa("Luiz", "Fagundes", "16/08/1962", 'Masculino')
const mae = new Pessoa("Loreni", "Puntel", "14/02/1981", 'Feminino')
const avoMae = new Pessoa("Leci", "Puntel", "16/08/1955", 'Feminino')
const avouMae = new Pessoa("Osmar", "Puntel", "14/02/1955", 'Masculino')
const avoPai = new Pessoa("Maria","Luiza","20/20/1955","Feminino")
const avouPai = new Pessoa("Carlos","Moraes","20/20/1955","Masculino")


eu.addChildren(pai)
eu.addChildren(mae)
mae.addChildren(avoMae)
mae.addChildren(avouMae)
pai.addChildren(avoPai)
pai.addChildren(avouPai)









