function operationController(operator, ...operands) {
  switch (operator) {
    case '+':
      return add(operands[0], operands[1])
    case '-':
      return subtract(operands[0], operands[1])
    case '*':
      return multiply(operands[0], operands[1])
    case '/':
      return divide(operands[0], operands[1])
    case '^':
      return exponent(operands[0], operands[1])

    default:
      throw new Error(`${operator} is invalid operator`);
  }
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function exponent(a, b) {
  return a ** b
}

console.log(operationController('$', 2, 4, 4, 2, 1))
