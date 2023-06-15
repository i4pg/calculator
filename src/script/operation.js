function Operation(firstOperand, operator = null, secondOperand = null) {
  this.firstOperand = firstOperand
  this.secondOperand = secondOperand
  this.operator = operator


  this.setFirstOperand = (operand) => {
    this.firstOperand = operand
  }
  this.setSecondOperand = (operand) => {
    this.secondOperand = operand
  }

  this.calculate = function() {
    return Calculator.operationController(this)
  }

  this.hasBothOperands = () => {
    return this.firstOperand && this.secondOperand
  }

  this.isFloatOperation = () => {
    return [this.firstOperand, this.secondOperand]
      .some(operand => /\./.test(operand))
  }
}
