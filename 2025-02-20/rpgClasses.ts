export class playerCharacter{
    //Atributo
    private name:string;
    private type:string;
    private job:string;
    private strengh:number;
    private health:number;
    private armor:number;
    private wspeed:number
    
    setName(nameCharacter:string):void{
        this.name = nameCharacter;
    } 
    getName():string{return this.name}

    setType(typeCharacter:string):void{
        this.type = typeCharacter
    }
    getType():string{return this.type}

    setJob(jobCharacter:string):void{
        this.job = jobCharacter
    }
    getJob():string{return this.job}

    setStrengh(strenghCharacter:number):void{
        this.strengh = strenghCharacter
    }
    getStrengh():number{return this.strengh}

    setHealth(healthCharacter:number):void{
        this.health = healthCharacter
    }
    getHealth():number{return this.health}

    setArmor(armorCharacter:number):void{
        this.armor = armorCharacter
    }
    getArmor():number{return this.armor}

    setWspeed(wspeedCharacter:number):void{
        this.wspeed = wspeedCharacter
    }
    getWspeed():number{return this.wspeed}



    damage():void{
        console.log(`They do ${this.strengh} damage`)
    }

    defend():void{
        console.log(`They have an armor class of ${this.armor}`)
    }

    walking():void{
        console.log(`They have a walking speed of ${this.wspeed}`)
    }

    jobRole():void{
        console.log(`They are a ${this.job}`)
    }

    showAllFunctions():void{
        console.log(`${this.name}`)
        this.damage();
        this.defend();
        this.walking();
        this.jobRole()
    }

}


