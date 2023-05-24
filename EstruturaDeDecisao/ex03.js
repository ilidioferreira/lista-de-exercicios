// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

function getGender(letter) {
    if (letter === "F") {
        return "Feminino";
    } else if (letter === "M") {
        return "Masculino";
    } else "Sexo Inválido";
}

const getGender = getGender("M");
console.log(getGender);