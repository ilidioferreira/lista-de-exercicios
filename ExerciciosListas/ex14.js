// Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// a. "Telefonou para a vítima?"
// b. "Esteve no local do crime?"
// c. "Mora perto da vítima?"
// d. "Devia para a vítima?"
// e. "Já trabalhou com a vítima?"
// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". 
// Caso contrário, ele será classificado como "Inocente".


const trueQuestions = 0 
const question_1 = prompt("Telefonou para a vítima? Digite 'sim' ou 'não'");

while (question_1 != "sim" && question_1 != "não") {
    question_1 = 
    prompt("Telefonou para a vítima? Digite 'sim' ou 'não'");
    if (question_1 === "sim") {
        trueQuestions =+ 1 
    }
}


if (boolean(prompt("Telefonou para a vítima?"))) {
        trueQuestions =+ 1
    }

if (boolean(prompt("Esteve no local do crime?"))) {
    trueQuestions =+ 1
}

if (boolean(prompt("Mora perto da vítima?"))) {
    trueQuestions =+ 1
}

if (boolean(prompt("Devia para a vítima?"))) {
    trueQuestions =+ 1
}

if (boolean(prompt("Já trabalhou com a vítima?"))) {
    trueQuestions =+ 1
}

function isSuspect () {
    if (trueQuestions === 2) {return "Suspeita"}
    else if (trueQuestions === 3 || trueQuestions === 4 ) {return "Cúmplice"}
    else if (trueQuestions === 5) {return "Assassino"}
    else {return "Inocente"}
}