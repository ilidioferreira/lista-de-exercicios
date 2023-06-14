// Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.

function getReverse(numberToReverse) {
    let currentString = numberToReverse.toString();
    let newString = "";
    for (let i = currentString.length - 1; i >= 0; i--) {
        newString += currentString[i];
    }
    return parseInt(newString);
}

const reverse = getReverse(123456);
console.log(reverse);