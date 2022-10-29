/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.getSum = () => a + b;
  this.getSubtraction = () => a - b;
  this.getMultiplication = () => a * b;
  this.getDivision = () => +(a / b).toFixed(2);
}

const calculator = new Calculator(6, -1);
const sum = calculator.getSum();
const subtraction = calculator.getSubtraction();
const multiplication = calculator.getMultiplication();
const division = calculator.getDivision();

console.log(sum, subtraction, multiplication, division);
