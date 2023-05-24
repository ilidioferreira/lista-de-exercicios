// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

function isValidGrade(number) {
    const message = "Valor Inválido"
    if (number <= 0 || number > 10) {
        return message;
    }
    if (number >= 0 && number <= 10)
        return number;
}

const a = isValidGrade(11)
console.log(a)