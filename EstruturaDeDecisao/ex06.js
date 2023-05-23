// Faça um Programa que leia três números e mostre o maior deles.

function getLargerNumber(n1, n2, n3) {
  if (n1 > n2 && n2 > n3) {
      return n1;
  } else if (n2 > n1 && n2 > n3) {
      return n2;
  } else return n3;
}
    
