import { Student } from "./student";

export class Evaluation{
    private student:Student
    private date:number
    private weight:number
    private height:number

    
    
    calculateIMC():number{
        let IMC = this.weight/(this.height^2)
        return IMC
    }
}
