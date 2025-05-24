import { Pessoa } from "./pessoa";

export class ArvoreGenealogica {
    public noRaiz: Pessoa
    public pai: Pessoa
    public filho: Pessoa[]

    adicionarFilho(pai: Pessoa, filho: Pessoa): void {
        pai.addChild(filho)
    }

    encontrarPessoa(): Pessoa | undefined {
        return
    }

}

