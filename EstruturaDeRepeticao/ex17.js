// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

function getFactorial(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial
}

const a = getFactorial(5);
console.log(a);