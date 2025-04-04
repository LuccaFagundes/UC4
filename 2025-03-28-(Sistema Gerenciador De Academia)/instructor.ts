import { User } from "./user"

export class Instructor extends User{
    private specialty:string
    private cref:string

    constructor(nameReceived:string, emailReceived:string, specialtyReceived:string, crefReceived:string){
        super(nameReceived,emailReceived)
        specialtyReceived = this.specialty
        crefReceived = this.cref
    }
}
