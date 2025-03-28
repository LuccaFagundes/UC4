import { Sabor } from "./saborPizza";


export class Pizza{
    protected sabor:Sabor
    private tamanho:string
    private preco:number

    constructor(saborPizza:Sabor, tamanhoPizza:string, precoPizza:number){
        this.sabor = saborPizza
        this.tamanho = tamanhoPizza
        this.preco = precoPizza
    }

    descrevePizza():void{
        console.log(`Pizza ${this.sabor}, de tamanho ${this.tamanho}, custando R$${this.preco}`)
    }
}

let pizzaCalabresa = new Pizza(Sabor.calabresa,"grande",70)
let pizzaQueijo = new Pizza(Sabor.quatroQueijos,"familia",75)
let pizzaTudo = new Pizza(Sabor.tudoDentro,"familia",200)


pizzaCalabresa.descrevePizza()
pizzaQueijo.descrevePizza()
pizzaTudo.descrevePizza()