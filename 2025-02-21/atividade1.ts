/*
1. Crie a classe Varinha com os atributos privados: madeira, núcleo e tamanho. Crie os
métodos getters e setters. Crie um método exibirDetalhes, como "Varinha de madeira de
[madeira], núcleo de [núcleo] e tamanho [tamanho]"
*/
export class wand{
    //Atributos
    private wood:string;
    private nucleus:string;
    private size:number

    setWood(woodWand:string):void{
        this.wood = woodWand
    }
    getWood():string{return this.wood}

    setNucleus(nucleusWand:string):void{
        this.nucleus = nucleusWand
    }
    getNucleus():string{return this.nucleus}

    setSize(sizeWand:number):void{
        this.size = sizeWand
    }
    getSize():number{return this.size}

    //Métodos
    exibirDetalhes():void{
        console.log(`This wand is made of ${this.wood}, it's nucleus is of ${this.nucleus} and it's size is ${this.size} cm.`)
    }
}

const fireBreath = new wand()
fireBreath.setWood("Dracaena Cinnabari")
fireBreath.setNucleus("Polished Ruby")
fireBreath.setSize(13)
fireBreath.exibirDetalhes()


