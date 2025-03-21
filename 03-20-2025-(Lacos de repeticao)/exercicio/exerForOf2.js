let array = [60,102,51,123,3,42]
let soma = 0
for(const posicao of array){
    if(posicao%2 == 0){
        soma = soma+posicao
    }
}
console.log(soma)