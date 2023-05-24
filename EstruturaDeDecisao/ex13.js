// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

function DayOfWeek (number) {
  if(number == 1) {
    console.log("Domingo");
  } else if (number == 2) {
    console.log("Segunda");
  } else if (number == 3) {
    console.log("Terça");
  } else if (number == 4) {
    console.log("Quarta");
  } else if (number == 5) {
    console.log("Quinta");
  } else if (number == 6) {
    console.log("Sexta");
  } else if (number == 7) {
    console.log("Sábado");
  } else console.log("Valor inválido!");
}
