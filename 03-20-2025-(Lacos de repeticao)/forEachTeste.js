let soma = 0;
const numeros = [65, 44, 12, 4];

// function myFunction(item){
//     soma += item
// };

// numeros.forEach(myFunction);

// numeros.forEach(myFunction => {
//     soma += myFunction
// });

// numeros.forEach(function(parametro){
//     soma += valor
// })

// console.log(soma);

const veiculos = ['carro','moto','bicicleta']

veiculos.forEach((element, index, array) => {
    console.log(`O elemento ${element} tem indice 
${index}`);
    console.log(`O array é:
${array}`)
})


