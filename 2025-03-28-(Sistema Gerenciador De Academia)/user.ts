
export class User{
    protected name:string
    protected email:string

    public constructor(nameReceived:string, emailReceived:string){
       this.name = nameReceived
       this.email = emailReceived
    }

    public showInformation():void{
        console.log(this.name, this.email)
    }
}
