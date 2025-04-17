
export class Feitico {
    private nome: string
    private poderBase: number
    private descricao: string

    constructor(nomeFeitico: string, poderFeitico: number, descricaoFeitico: string) {
        this.nome = nomeFeitico
        this.poderBase = poderFeitico
        this.descricao = descricaoFeitico
    }

    getNome(): string {
        return this.nome
    }
    getPoderBase(): number {
        return this.poderBase
    }
    getDescricao(): string {
        return this.descricao
    }

    lancarFeitico(): void {
        console.log(`O feitiço ${this.nome} foi lançado.`)
    }
    descreverFeitico(): void {
        console.log(`Este feitiço se chama ${this.nome}, ${this.descricao}`)
    }
}