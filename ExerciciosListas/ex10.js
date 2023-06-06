// Faça um Programa que leia dois vetores com 10 elementos cada. 
// Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.

const mensage = prompt('Digite qualquer coisa.');

function getVectors() {
    const vector1 = [];
    const vector2 = [];
    for (let i = 0; i < 40; i++) {
        vector1.push(mensage);
        for (let i = 20; i < 40; i++) {
            vector2.push(mensage);
        }
    }
    return vector1, vector2
}

function buildVector(vector1, vector2) {
    const vector3 = []
    for (let i = 0; i < 20; i++) {
        vector3.push(vector1[i]);
        vector3.push(vector2[i]);
    }
    return vector3
}
