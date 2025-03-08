// Criar as classes para: Distrito (com atributos como nome, recursos[], populacao), Tributo
// (com atributos como nome, saude, distrito, segredo, habilidades[]) e Organizador (com
// atributos (nome e distritos[]) e métodos como liberarAnimais(), criarDesastre()).
// Aplicar Visibilidade dos atributos e métodos :
// Implementação de métodos:
// Tributos coletam recursos do distrito (se permitido). Organizador liberando animais na
// arena.
// DICA: Usar o console.log() para verificar o resultado da interação.
// Cada grupo criará um arquivo arena.ts instanciando os seus distritos, tributos e um
// organizador.
// Cada distrito deve ter um array de recursos.
// O organizador deve ter um array de distritos.

export class Districts{}

export class Disaster {
    private name:string
    private damage:number

    public setNameDisaster(nameDisaster:string){
        this.name = nameDisaster
    }
    public getNameDisaster():string{return this.name}

    public setDamageDisaster(damageDisaster:number){
        this.damage = damageDisaster
    }
    public getDamageDisaster():number{return this.damage}

    public causeDamage():void{
        let selectedDamage:number = Math.floor(Math.random()*this.damage+this.damage/3)
        this.checkForCriticalHit(selectedDamage)
    }
    checkForCriticalHit(damage:number):void{
        let criticalChance = 100
        let number:number
        let chaceOfCrit:number = Math.floor(Math.random()*criticalChance)
        if (chaceOfCrit>=0 && chaceOfCrit<=90) {
            number = 1
        } else if(chaceOfCrit>90 && chaceOfCrit<=100){
            number = 2
        }
        switch (number) {
            case 1:
                this.damage
                break
                
            case 2:
                let randomizerOfDamage = Math.floor(Math.random()*5+1)
                this.damage*randomizerOfDamage
                break 

            default:
                console.log("O B L I V I O N")
                break
        }
    }
}

export class Organizer{

    //ATRIBUTES
    private name:string
    private district:Districts

    public setNameOrganizer(nameOrganizer:string):void{
        this.name = nameOrganizer;
    }
    public getNameOrganizer():string{return this.name}
    
    public setDistrict(districtOrganizer:Districts):void{
        this.district = districtOrganizer
    }
    public getDistrict():Districts{return this.district}

    public presentOrganizer():void{
        console.log(` [====] {Head Gamemaker} [====]
I present to you the organizer ${this.name}, they control the district(s) ${this.district}
        `)
    }

    // METHODS
    public whoLetTheDawgsOut():void{
        console.log(`The organizer ${this.name}, has released his beasts.`)
    }



    public causeDisaster():void{
        let selectedNumber:number = Math.floor(Math.random()*100+1)
        let number:number

        if (selectedNumber>=0 && selectedNumber<=25) {
            number = 1
        } else if(selectedNumber>25 && selectedNumber<=70){
            number = 2
        } else if(selectedNumber>70 && selectedNumber<=95){
            number = 3
        } else if(selectedNumber>95 && selectedNumber<=100){
            number = 4
        } else {
            console.log(' An unexpected rip in space and time has opened. Theres nowhere to run and nowhere to hide. ')
        }
        switch (number) {
            case 1:
                console.log(`The organizer ${this.name} has caused a thunderstorm to fall down, usage of metallic weaponry is not reccomended.`)
                break
                
            case 2:
                console.log(`The organizer ${this.name} has caused a earthquake to break upon the land, the area in some districts have been turned into difficult terrain.`)
                break
        
            case 3:
                console.log(`The organizer ${this.name} has caused an acid rain to fall upon the land, staying long outside may cause terrible infections.`)
                break
        
            case 4:
                console.log(`The organizer ${this.name} has caused armaggedon to begin, may god help you, good luck.`)
            break

            default:
                console.log("O B L I V I O N")
            break
            }
            
        }
}

const district1 = new Districts

const Snow = new Organizer
Snow.setNameOrganizer('Coriolanus Snow')
Snow.setDistrict(district1)


Snow.presentOrganizer()
Snow.causeDisaster()


