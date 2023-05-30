// Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// a. "Telefonou para a vítima?"
// b. "Esteve no local do crime?"
// c. "Mora perto da vítima?"
// d. "Devia para a vítima?"
// e. "Já trabalhou com a vítima?"
// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". 
// Caso contrário, ele será classificado como "Inocente".


let trueQuestions = 0 
const question_1 = prompt("Telefonou para a vítima? Digite 'sim' ou 'não'");
const question_2 = prompt("Esteve no local do crime? Digite 'sim' ou 'não'");
const question_3 = prompt("Mora perto da vítima? Digite 'sim' ou 'não'");
const question_4 = prompt("Devia para a vítima? Digite 'sim' ou 'não'");
const question_5 = prompt("Já trabalhou com a vítima? Digite 'sim' ou 'não'");

while (question_1 != "sim" && question_1 != "não") {
    question_1;
    if (question_1 === "sim") {
        trueQuestions =+ 1 
    }
}

while (question_2 != "sim" && question_2 != "não") {
    question_2;
    if (question_2 === "sim") {
        trueQuestions =+ 1 
    }
}

while (question_3 != "sim" && question_3 != "não") {
    question_3;
    if (question_3 === "sim") {
        trueQuestions =+ 1 
    }
}

while (question_4 != "sim" && question_4 != "não") {
    question_4;
    if (question_4 === "sim") {
        trueQuestions =+ 1 
    }
}

while (question_5 != "sim" && question_5 != "não") {
    question_5;
    if (question_5 === "sim") {
        trueQuestions =+ 1 
    }
}

function getStatus () {
    if (trueQuestions === 2) {return "Suspeita"}
    else if (trueQuestions === 3 || trueQuestions === 4 ) {return "Cúmplice"}
    else if (trueQuestions === 5) {return "Assassino"}
    else {return "Inocente"}
}