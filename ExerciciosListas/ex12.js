// Foram anotadas as idades e alturas de 30 alunos. 
// Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.

const heightMensage = prompt('Digite sua altura (em centímetros).');
const ageMensage = prompt('Digite sua idade.');

function getHeightsAndAges () {
    const heightsAndAges = []  
    for (let i = 0; i < 30; i++) {
        const height = parseInt(heightMensage);
        const age = parseInt(ageMensage);
        heightsAndAges.push([height,age]);
    }
    return heightsAndAges
}


function getHeightAverage (heightsAndAges) {
    const heightSum = 0
    const heightAverage = heightSum/30 
    for (let i = 0; i < 30; i++) {
        heightsAndAges =+ heightsAndAges[i][0]
    }
    return heightAverage
}


function getShortStudents (heightsAndAges, heightAverage) {
    const sumStudents = 0
    for (let i = 0; i < 30; i++) {
        if (heightsAndAges[i][0] < heightAverage && heightsAndAges[i][1] >= 13)
        sumStudents =+ 1
    }
    return sumStudents
}
