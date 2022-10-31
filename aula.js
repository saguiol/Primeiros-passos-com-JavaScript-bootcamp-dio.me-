/* Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/
/*
entradas a baixo
*/
const precoDoCombustivel = 4.88;
const gastoDoCarroPorKm = 7;
const distanciaPercorridaEmKm = 100;

/*
calculo a baixo igual da aula
*/
const litrosConsumidos = distanciaPercorridaEmKm / gastoDoCarroPorKm;
const valorGasto = litrosConsumidos * precoDoCombustivel;


console.log('Olá, o valor da sua viagem é:');
console.log(valorGasto.toFixed(2));


