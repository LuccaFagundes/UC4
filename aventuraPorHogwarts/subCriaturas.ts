import { CriaturaMagica } from "./criaturasMagicas";

export class Dragao extends CriaturaMagica {

    constructor(nomeDragao: string, tipoDragao: string, poderDragao: number) {
        super(nomeDragao, tipoDragao, poderDragao)
    }

    usarMagia(): void {
        console.log(`${this.nome} está a expelir fogo.`)
    }
}

export class Fenix extends CriaturaMagica {

    constructor(nomeFenix: string, tipoFenix: string, poderFenix: number) {
        super(nomeFenix, tipoFenix, poderFenix)
    }

    usarMagia(): void {
        console.log(`${this.nome} está a regenerar/reviver.`)
    }
}

export class Unicornio extends CriaturaMagica {

    constructor(nomeUnicornio: string, tipoUnicornio: string, poderUnicornio: number) {
        super(nomeUnicornio, tipoUnicornio, poderUnicornio)
    }

    usarMagia(): void {
        console.log(`${this.nome} explodiu e virou suprimentos.`)
    }
}