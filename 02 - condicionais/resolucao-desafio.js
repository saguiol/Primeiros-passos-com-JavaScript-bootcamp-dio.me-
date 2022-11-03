/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 4.08;
const precoGasolina = 4.88;
const tipoDeCombustivelNoCarro = 'Gasolina';

const gastoMedioPorKm = 7;
const distanciaEmKmDaViagem = 120;


if (tipoDeCombustivelNoCarro === 'Etanol') {
    const calculoNoEtanol = distanciaEmKmDaViagem / gastoMedioPorKm * precoEtanol;
    console.log('O valor gasto na viagem usando Etanol é de R$', calculoNoEtanol.toFixed(2));

} else {
    const calculoNaGasolina = distanciaEmKmDaViagem / gastoMedioPorKm * precoGasolina;
    console.log('mas se mudar e colocar Gasolina, vai ser de R$', calculoNaGasolina.toFixed(2));
}
