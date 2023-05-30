// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

function isValidGrade(number) {
    if (number <= 0 || number > 10) {
        return false;
    }
    return true;
}

while (true) {
   const grade = float(prompt('Digite sua nota'));
   const valid = isValidGrade(grade);
   if (valid) break;
   else alert("Inválido! Digite novamente.");
}
