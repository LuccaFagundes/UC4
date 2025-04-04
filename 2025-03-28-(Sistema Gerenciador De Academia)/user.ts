
export class User {
    protected name:string
    protected email:string

    constructor(nameReceived:string, emailReceived:string){
        nameReceived = this.name
        emailReceived = this.email
    }

    showInformation():void{
        console.log(`User ${this.name} has been registered, under the email ${this.email}`)
    }
}