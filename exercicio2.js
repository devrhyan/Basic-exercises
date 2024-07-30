
// const numero = 20;
// const isNumeroEPar = (numero % 2) === 0;

// if(isNumeroEPar){
//    console.log("O número é Par")
//} else {
//    console.log("O número é Ímpar")
//}

// Faça um programa para calcular uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1- Preço do Etanol;
// 2- Preço da Gasolina;
// 3- O tipo de combustível que está no seu carro;
// 4- Gasto médio de combustível do carro por KM;
// 5- Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar está viagem;
const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'Gasolina';

const litrosGastos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Etanol') {
    const resultado = litrosGastos * precoEtanol;
    console.log(resultado.toFixed(2));
} else {
    const resultado = litrosGastos * precoGasolina;
    console.log(resultado.toFixed(2));
}


