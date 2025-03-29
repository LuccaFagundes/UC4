import { User } from "./user"

export class Student extends User{
    private age:number
    private weight:number
    private height:number

    constructor(nameReceived:string, emailReceived:string, ageUser:number, weightUser:number, heightUser:number){
        super(nameReceived,emailReceived)
        this.age = ageUser
        this.weight = weightUser
        this.height = heightUser
    }

    calculateIMC():number{
        let IMC = this.weight/(this.height^2)
        return IMC
    }

    public showInformation(): void {
        
    }
}

const Lucca = new Student('Lucca','luccapfagundes@gmail.com',21,59,1.67)

