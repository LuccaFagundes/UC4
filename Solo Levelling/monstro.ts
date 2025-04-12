import { Habilidade } from "./interfaceHabilidades"

export class Monstro {
    private nome: string
    private nivel: number
    private vida: number
    private resistencia: number
    private forca: number
    private velocidade: number

    constructor(nome: string, nivel: number, vida: number, resistencia: number, forca: number, velocidade: number) {
        this.nome = nome
        this.nivel = nivel
        this.vida = vida
        this.resistencia = resistencia
        this.forca = forca
        this.velocidade = velocidade
    }

    setNome(nomeMonstro: string) {
        this.nome = nomeMonstro
    }
    setVida(vidaMonstro: number) {
        this.vida = vidaMonstro
    }
    setForca(forcaMonstro: number) {
        this.forca = forcaMonstro
    }

    getNome(): string {
        return this.nome
    }
    getVida(): number {
        return this.vida
    }
    getForca(): number {
        return this.forca
    }

    receberDano(dano: number): void {
        dano -= this.resistencia
        this.vida -= dano
        console.log(`${this.nome} está com ${this.vida} de vida`)
    }

    serInvocado(): void {
        let index = 0
        let chanceDeInvocar

        if (this.vida > 1) {
            console.log('Esta habilidade pode apenas ser usadas em corpos')
        } else {
            chanceDeInvocar = 0;
            while (index < 3 && chanceDeInvocar === 0) {
                chanceDeInvocar = Math.floor(Math.random() * 2)
                console.log(chanceDeInvocar)
                index++

                if (chanceDeInvocar === 0) {
                    console.log(`Tentativa ${index} de invocação falhou`)
                } else {
                    this.nome = 'Shadow ' + this.nome;
                    this.vida = this.vida * 1.5;
                    this.forca = this.forca * 1.5;
                    console.log(`O monstro ${this.nome} foi invocado com sucesso`)
                }
            } chanceDeInvocar = 0
            index = 0
        }
    }
}