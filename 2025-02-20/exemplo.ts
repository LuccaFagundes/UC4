import { Cat } from "./class";

export class user{
    private nome:string;
    private cat:Cat;

    setNome(meuNome:string):void{this.nome=meuNome};
    setCat(meuCat:Cat):void{this.cat=meuCat};
    adicionarTarefa():void{console.log("Tarefa adicionada")}
}

const UserLucca = new user();
UserLucca.setNome("Lucca");

const meuGato = new Cat()
meuGato.setName("Dimenor");

UserLucca.setCat(meuGato);

