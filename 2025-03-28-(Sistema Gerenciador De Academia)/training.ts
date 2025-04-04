import { Exercices } from "./exercices";
import { Instructor } from "./instructor";
import { Student } from "./student";

export class Training{
    private student:Student
    private instructor:Instructor
    private exercices:Exercices

    constructor(studentReceived:Student, instructorReceived:Instructor, execerciseReceived:Exercices){
        this.student = studentReceived
        this.instructor = instructorReceived
        this.exercices = execerciseReceived
    }
}