import { CriaturaMagica } from "./criaturasMagicas";

export abstract class Guardiao extends CriaturaMagica {

    constructor(nomeGuardiao: string, tipoGuardiao: string, poderGuardiao: number) {
        super(nomeGuardiao, tipoGuardiao, poderGuardiao)
    }

    usarMagia(): void { }

    protegerSegredo(): void { }
}

export class Cerberus extends Guardiao {

    constructor(nomeCerberus: string, tipoCerberus: string, poderCerberus: number) {
        super(nomeCerberus, tipoCerberus, poderCerberus)
    }

    usarMagia(): void {
        
    }
}

export class Basilisco extends Guardiao {

    constructor(nomeBasilisco: string, tipoBasilisco: string, poderBasilisco: number) {
        super(nomeBasilisco, tipoBasilisco, poderBasilisco)
    }

    usarMagia(): void {
        
    }

    protegerSegredo(): void {
        
    }
}

