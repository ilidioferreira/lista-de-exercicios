// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

function isValidPassword (login, password) {
    while (login === password) {
        return "A senha não pode ser igual ao login! Insira os dados novamente.";
    }
}
