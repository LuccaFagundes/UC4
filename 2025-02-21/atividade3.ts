/*
3. Crie a classe Feitiço com os atributos privados nome, tipo (ex: defesa, ataque, cura) e
poder. Implemente os métodos getters e setters. Crie um método lancarFeitiço que simule o
lançamento do feitiço, como "O feitiço [nome] do tipo [tipo] com poder [poder] foi lançado!".
*/

export class spell{
    // Atributes
    private name:string;
    private type:string;
    private power:number

    setName(nameSpell:string):void{
        this.name = nameSpell
    }
    getName():string{return this.name}

    setType(typeSpell:string):void{
        this.type = typeSpell
    }
    getType():string{return this.type}

    setPower(powerSpell:number):void{
        this.power = powerSpell
    }
    getPower():number{return this.power}

    castSpell():void{
        console.log(`This spell is called ${this.name}, it's typing is ${this.type} and it's power is ${this.power}`)
    }
}

const fireball = new spell()
fireball.setName('Fireball')
fireball.setType('Offensive')
fireball.setPower(28)
fireball.castSpell()



