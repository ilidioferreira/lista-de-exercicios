// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function LetterType (letter) {
  letter = letter.toLowerCase()
  if (letter == 'a' || letter == 'b' || letter == 'c' || letter == 'd' || letter == 'e') {
    console.log("Vogal");
  } else console.log("Consoante");
}
