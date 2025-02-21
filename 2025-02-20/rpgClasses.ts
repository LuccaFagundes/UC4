export class playerCharacter{
    //Atributo
    name:string;
    type:string;
    strengh:number;
    health:number;
    armor:number
    
    constructor(nameCharacter:string,typeCharacter:string,strenghCharacter:number,healthCharacter:number,armorCharacter:number) {
        this.name = nameCharacter
        this.type = typeCharacter
        this.strengh = strenghCharacter
        this.health = healthCharacter
        this.armor = armorCharacter
    }

    damage():void{
        console.log(`The ${this.name} does ${this.strengh} damage`)
    }

    defend():void{
        console.log(`The ${this.name} has an armor class of ${this.armor}`)
    }

}

const Bard = new playerCharacter("Minstrel Smith","Caster",15,30,16)
Bard.damage();
Bard.defend()

const Sorcerer = new playerCharacter("Taks Frod","Caster",8,10,15)
Sorcerer.damage();
Sorcerer.defend()

