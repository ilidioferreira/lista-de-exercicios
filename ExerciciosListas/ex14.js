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
const questions = ("Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?", "Devia para a vítima?", "Já trabalhou com a vítima?")

function getAnswers() {
    for (let i = 0; i < 20; i++)
        let answers = prompt(questions[i])
    while (answers != "sim" && answers != "não") {
        answers;
        if (question_1 === "sim") {
            trueQuestions = +1
        } else trueQuestions = +0
    }
}

function getStatus(trueQuestions) {
    if (trueQuestions === 2) {
        return "Suspeito"
    } else if (trueQuestions === 3 || trueQuestions === 4) {
        return "Cúmplice"
    } else if (trueQuestions === 5) {
        return "Assassino"
    } else {
        return "Inocente"
    }
}