import { Relacionavel } from "./relacionavel"

export class Pessoa implements Relacionavel {
    protected nome: string
    protected sobrenome: string
    protected dataNascimento: string
    protected genero: "Masculino" | "Feminino"
    protected outrasRelacoes: Pessoa[]

    constructor(nome: string, sobre: string, dataNasc: string, genero: "Masculino" | "Feminino") {
        this.nome = nome
        this.sobrenome = sobre
        this.dataNascimento = dataNasc
        this.genero = genero
    }

    addChild(filho: Pessoa): void {
        this.outrasRelacoes.push(filho)
    }

    getRelacoes(): void{
        for (let i = 0; i < this.outrasRelacoes.length; i++) {
            console.log(this.outrasRelacoes[i])
        }
    }

    descreverRelacao(): string {
        return this.nome + " está relacionada com" + this.outrasRelacoes + "."
    }

}