function Calculator() {
}

Calculator.operationController = (operator, firstOperand, secondOperand) => {
  console.log(firstOperand, secondOperand, operator)
  switch (operator) {
    case '+':
      return Calculator.add(firstOperand, secondOperand)
    case '-':
      return Calculator.subtract(firstOperand, secondOperand)
    case '×':
      return Calculator.multiply(firstOperand, secondOperand)
    case '/':
      return Calculator.divide(firstOperand, secondOperand)
    case '^':
      return Calculator.exponent(firstOperand, secondOperand)

    default:
      throw new Error(`${operator} is invalid operator`);
  }
}

Calculator.add = function(x, y) {
  return x + y
}

Calculator.subtract = function(x, y) {
  return x - y
}

Calculator.multiply = function(x, y) {
  return x * y
}

Calculator.divide = function(x, y) {
  return x / y
}

Calculator.exponent = function(x, y) {
  return x ** y
}
