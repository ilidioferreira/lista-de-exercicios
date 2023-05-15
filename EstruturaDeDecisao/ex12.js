function salary (work_hours, hour_value) {
  raw_salary = work_hours * hour_value
  if (raw_salary <= 900) {
    tax_rate = 0
  }
  else if (raw_salary > 900 && raw_salary <= 1500) {
   tax_rate = 0.05
  }
  else if (raw_salary > 1500 && raw_salary <= 2500) {
   tax_rate = 0.10
  }
  else tax_rate = 0.20
  ir = tax_rate * raw_salary
  inss = 0.10 * raw_salary
  fgts = 0.11 * raw_salary
  total_discounts = ir + inss
  net_salary = raw_salary - total_discounts
  return
    console.log ("Salário Bruto: (${hour_value} * ${work_hours})        : R$ ${raw_salary}"
        + "/n" + "(-) IR (${tax_rate}%)                     : R$   ${ir}"  
        + "/n" + "(-) INSS (10%)                  : R$  ${inss}"
        + "/n" + "FGTS (11%)                      : R$  ${fgts}"
        + "/n" + "Total de descontos              : R$  ${total_discounts}"
        + "/n" + "Salário Liquido                 : R$  ${net_salary}")
}
                   
