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
  const segundaNota = 9;
  const terceiraNota = 6;

  const calculoDaMedia = primeiraNota + segundaNota + terceiraNota;
  const divisaoDoCalculo = 3;
  const resultadoDoCalculo = calculoDaMedia / divisaoDoCalculo;

  

  console.log('A média das notas tiradas durante do semestre do Pedrinho é:', resultadoDoCalculo.toFixed(2));

  if (resultadoDoCalculo < 5) {

       console.log('E a sua classificação é: Reprovado!')

  } else if (resultadoDoCalculo === 5) {

       console.log('E a sua classificação é: Recuperação!')  
    } else if (resultadoDoCalculo <= 7) {
    
        console.log('E a sua classificação é: Recuperação!')

  } else {
  
    resultadoDoCalculo > 7 
    console.log('E a sua classificação é: Aprovado!')

  }  