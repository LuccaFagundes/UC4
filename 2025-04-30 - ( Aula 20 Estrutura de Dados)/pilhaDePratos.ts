
export class PilhaDePratos {

    private pilhaDePratos: string[] = []


    adicionarPrato(item: string): void {
        this.pilhaDePratos.push(item)
    }

    retirarPrato():void {
        this.pilhaDePratos.pop()
    }

    estarVazio(): boolean {
        return this.pilhaDePratos.length === 0
    }

    tamanho(): number {
        return this.pilhaDePratos.length
    }

    mostrarUltimo(): string | undefined {
        return this.pilhaDePratos[this.pilhaDePratos.length - 1]
    }
}

const pilhaDePrato = new PilhaDePratos

pilhaDePrato.adicionarPrato('Prato de porcelana folhada')
pilhaDePrato.adicionarPrato('Prato de vidro queimado')

console.log(pilhaDePrato.mostrarUltimo())

pilhaDePrato.retirarPrato()


