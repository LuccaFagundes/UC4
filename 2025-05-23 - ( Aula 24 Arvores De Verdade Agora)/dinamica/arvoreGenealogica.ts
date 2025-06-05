import { Pessoa } from "./pessoa";
import { Node } from "../tree";

export class ArvoreGenealogica extends Noh<Pessoa>{
    
    constructor(valor: Pessoa){
        super(valor)
    }

    addChildren(pai: Pessoa, filho: Pessoa): void{
        pai.addChildren(filho)
    }
}
