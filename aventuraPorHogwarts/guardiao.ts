import { CriaturaMagica } from "./criaturasMagicas";

export abstract class Guardiao extends CriaturaMagica {

    constructor(nomeGuardiao: string, tipoGuardiao: string, poderGuardiao: number) {
        super(nomeGuardiao, tipoGuardiao, poderGuardiao)
    }

    usarMagia(): void {
        console.log(`Lá vem o disco voador.`)
    }

    protegerSegredo(): void {
        console.log(`${this.nome} está a proteger os segredos para aniquilar os trouxas.`)
    }
}