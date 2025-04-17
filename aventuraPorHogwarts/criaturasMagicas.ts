
export abstract class CriaturaMagica {
    protected nome: string
    protected tipo: string
    protected poder: number

    constructor(nomeCriatura: string, tipoCriatura: string, poderCriatura: number) {
        this.nome = nomeCriatura
        this.tipo = tipoCriatura
        this.poder = poderCriatura
    }

    abstract usarMagia(): void
}