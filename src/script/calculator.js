function operationController(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      return add(firstOperand, secondOperand)
    case '-':
      return subtract(firstOperand, secondOperand)
    case '*':
      return multiply(firstOperand, secondOperand)
    case '/':
      return divide(firstOperand, secondOperand)
    case '^':
      return exponent(firstOperand, secondOperand)

    default:
      throw new Error(`${operator} is invalid operator`);
  }
}

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

function exponent(x, y) {
  return x ** y
}
