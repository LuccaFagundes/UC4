/*
2. Desenvolva a classe ChapeuSeletor com o atributo privado casa. Crie um método
selecionarCasa que, aleatoriamente(Math.floor(Math.random() * 4+1)), atribui uma das
quatro casas de Hogwarts . Crie um método exibirCasa para mostrar a casa.
*/
export class ChapeuSeletor{
    private house:string

        setHouse():void{
        let selectedNumber = Math.floor(Math.random()*4+1)
        switch (selectedNumber) {
            case 1:
                this.house = 'Gryffindor'
                break
                
            case 2:
                this.house = 'Slytherin'
                break
        
            case 3:
                this.house =  'Hufflepuff'
                break
        
            case 4:
                this.house =  'Ravenclaw'
            break

            default:
                console.log("O B L I V I O N")
            break
            }
            
        }
        getHouse():void{
            console.log(`Your house has been selected to be ${this.house}`)
        }
}

const novoAluno = new ChapeuSeletor()
novoAluno.setHouse()
novoAluno.getHouse()

