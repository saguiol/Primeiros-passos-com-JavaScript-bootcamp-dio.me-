/*
  1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e 
  a sua classificação conforme a tabela abaixo. 
  
  Média = (nota 1 + nota 2 + nota 3) / 3;

  Classificação: 
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre.;
  */

const primeiraNota = 7;
const segundaNota = 7;
const terceiraNota = 8;
const media = (primeiraNota + segundaNota + terceiraNota) / 3;

console.log('A média das notas tiradas durante do semestre do Pedrinho é:', media.toFixed(2));

if (media < 5) {

    console.log('E a sua classificação é: Reprovado!')

} else if (media >= 5 && media <= 7) {

    console.log('E a sua classificação é: Recuperação!')

} else {

    console.log('E a sua classificação é: Aprovado!')

}  