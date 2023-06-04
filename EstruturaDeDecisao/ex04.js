// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function isVowel (letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const letterLowedCase = letter.toLowerCase()
    return vowels.includes(letterLowedCase);
  }
  const letterIsVowel = isVowel('b');
  console.log(letterIsVowel? 'Yes': 'No');