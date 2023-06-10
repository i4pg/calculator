function Operation(firstOperand, operator, secondOperand = null) {
  this.firstOperand = firstOperand
  this.operator = operator
  this.secondOperand = secondOperand

  this.setSecondOperand = (operand) => {
    this.secondOperand = operand
  }

  this.calculate = () => {
    return Calculator.operationController(this.operator, +this.firstOperand, +this.secondOperand)
  }

  result = this.firstOperand
  emptyDisplay()
}

Operation.constructorController = (operator, operand) => {
  if (!recentOperation) {
    return recentOperation = new Operation(operand, operator)
  } else {
    Operation.assignSecondOperand(operand)
  }
}
