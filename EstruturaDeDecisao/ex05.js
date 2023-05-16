//Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Reprovado", se a média for menor do que sete;
//A mensagem "Aprovado com Distinção", se a média for igual a dez.

function NotaFinal (n1, n2) {
  if ( n1 + n2 == 10 ) {
    console.log("Aprovado com Distinção");
  } else if ( n1 + n2 >= 7 ) {
    console.log("Aprovado");
  } else console.log("Reprovado");
}
    
