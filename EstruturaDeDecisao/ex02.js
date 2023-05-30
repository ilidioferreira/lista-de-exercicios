// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

function isPositive(number) {
    if (number >= 0) return true;
    return false;
}
const result = isPositive(5);
console.log(result? "positive": "negative")
