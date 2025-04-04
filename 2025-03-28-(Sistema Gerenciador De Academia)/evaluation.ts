import { Student } from "./student";

export class Evaluation {
    private student:Student
    private date:number
    private weight:number
    private height:number
    private bmi:number
    private observations:string

    constructor(studReceived:Student, dateReceived:number, weightReceived:number, heightReceived:number, bmiReceived:number, obsReceived:string){
        this.student = studReceived
        this.date = dateReceived
        this.weight = weightReceived
        this.height = heightReceived
        this.bmi = bmiReceived
        this.observations = obsReceived
    }

    calcBMI():void{
        this.bmi = this.weight / (this.height^2)
    }

    generateReport():void{
        console.log(`The student ${this.student.getName()}, their current weight is:`)
    }
}