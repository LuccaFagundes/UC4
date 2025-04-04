import { User } from "./user";

export class Student extends User{
    private age:number
    private weight:number
    private height:number

    constructor(nameReceived:string, emailReceived:string, ageReceived:number, weightReceived:number, heightReceived:number){
        super(nameReceived, emailReceived)
        ageReceived = this.age
        weightReceived = this.weight
        heightReceived = this.height
    }

    setName(nameReceived:string){
        this.name = nameReceived
    }

    getName():string{
        return this.name
    }

    calculateBMI():void{
        let BMI = this.weight / (this.height^2)
    }
}