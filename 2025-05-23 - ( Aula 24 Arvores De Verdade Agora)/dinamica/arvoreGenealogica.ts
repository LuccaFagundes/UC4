import { Pessoa } from "./pessoa";
import { Node } from "./node";

export class ArvoreGenealogica extends Node<Pessoa>{
    
    constructor(valor: Pessoa){
        super(valor)
    }

    addChildren(pai: Pessoa, filho: Pessoa): void{
        pai.addChildren(filho)
    }
}