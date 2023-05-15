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
