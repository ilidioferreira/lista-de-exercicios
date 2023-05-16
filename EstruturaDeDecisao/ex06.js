// Faça um Programa que leia três números e mostre o maior deles.

function LargerNumber (n1, n2, n3) {
  if ( n1 > n2 && n2 > n3) {
    console.log(n1);
  } else if ( n2 > n1 && n2 > n3) {
    console.log(n2);
  } else console.log(n3);
}
    
