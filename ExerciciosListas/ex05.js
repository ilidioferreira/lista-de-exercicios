// Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

function getNumbersLists(number) {
    const mensage = prompt('Digite um número inteiro');
    const numbers = []
    const even = []
    const odd = []
    while (numbers.length <= 20) {
        numbers.includes(number);
        if (number % 2 === 0) {
            even.includes(number);
        } else {
            odd.includes(number);
        }
    return mensage
    }
    return numbers, even, odd
}