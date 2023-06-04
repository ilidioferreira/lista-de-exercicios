// Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

const mensage = prompt('Digite um número inteiro.');

function getNumbersLists() {
    const numbers = []
    const even = []
    const odd = []
    
    for(let I = 0; I< 20; i++){
       const number = parseInt(prompt('Digite um número inteiro.'));        
       numbers.push(number);

        if (number % 2 === 0) {
            even.includes(number);
        } else {
            odd.includes(number);
        }
    }
    
    return numbers, even, odd
}

const [ numbers, even, odd ] = getNumbersLists()
console.log({ numbers, even, odd })

//------------------------------------------------------------

function readNumbers(number) {
    const numbers = []
    
    for(let I = 0; I< number; i++){
       const number = parseInt(prompt('Digite um número inteiro.'));        
       numbers.push(number);
     }

    return numbers
}

function getOddsAndEvens(numbers) {
    const even = []
    const odd = []
    
    for(let index = 0; index < numbers.length; index++){
        if (numbers[index] % 2 === 0) {
            even.includes(numbers[index]);
        } else {
            odd.includes(numbers[index]);
        }
    }
    
    for(const number of numbers){
        if (number % 2 === 0) {
            even.includes(number);
        } else {
            odd.includes(number);
        }
    }
    
    return odd, even
}

const numbers = readNumbers(20)
const [ even, odd ] = getOddsAndEvens(numbers)
console.log({ numbers, even, odd })
}