// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.


function WageRaise (salary) {
  if (salary <= 280) {
    new_salary = 1.2*salary
  } else if (salary > 280 && salary <= 700) {
    new_salary = 1.15*salary
  } else if (salary > 700 && salary <= 1500) {
    new_salary = 1.1*salary
  } else new_salary = 1.05*salary
  percentage = new_salary/salary
  raise_value = new_salary - salary
  return
    console.log(salary);
    console.log(percentage);
    console.log(raise_value);
    console.log(new_salary);
}
