var calculator = {
  excute: function (num1, num2, operand) {
    return operand(num1, num2);
  },
};

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(calculator.excute(2, 3, add));
console.log(calculator.excute(2, 3, subtract));

calculator.excute(2, 2, function (num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
});

function areaOfTriangle(num1, num2) {
  console.log(0.5 * num1 * num2);
  return 0.5 * num1 * num2;
}

calculator.excute(5, 6, areaOfTriangle);
