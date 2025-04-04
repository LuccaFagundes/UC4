
export class Equipment {
    private name:string
    private description:string
    private availability:boolean

    constructor(nameReceived:string, descReceived:string, avaiReceived:boolean){
        this.name = nameReceived
        this.description = descReceived
        this.availability = avaiReceived
    }

    checkForAvailability():void{
        if(this.availability === true){
            console.log(`${this.name} is available to be used`)
        } else {
            console.log('Someone else is using this equipment')
        }
    }
}