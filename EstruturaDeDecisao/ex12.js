// Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo)
// e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). 
// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
// No exemplo o valor da hora é 5 e a quantidade de hora é 220.

function buildSalaryMessage(hour_value, work_hours, raw_salary, tax_rate, ir, fgts, total_discounts, net_salary) {
  return `Salário Bruto: (${hour_value} * ${work_hours})        : R$ ${raw_salary} +
      "/n" + "(-) IR (${tax_rate}%)                     : R$   ${ir}" +
      "/n" + "(-) INSS (10%)                  : R$  ${inss}" +
      "/n" + "FGTS (11%)                      : R$  ${fgts}" +
      "/n" + "Total de descontos              : R$  ${total_discounts}" +
      "/n" + "Salário Liquido                 : R$  ${net_salary}`

}

function caculateTaxRate(raw_salary) {
  if (raw_salary <= 900) {
      tax_rate = 0
  } else if (raw_salary > 900 && raw_salary <= 1500) {
      tax_rate = 0.05
  } else if (raw_salary > 1500 && raw_salary <= 2500) {
      tax_rate = 0.10
  } else tax_rate = 0.20

  return taxRate;
}

function salary(work_hours, hour_value) {
  raw_salary = work_hours * hour_value
  ir = tax_rate * raw_salary
  inss = 0.10 * raw_salary
  fgts = 0.11 * raw_salary
  total_discounts = ir + inss
  net_salary = raw_salary - total_discounts
}
                   
