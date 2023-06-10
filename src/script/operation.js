function Operation(firstOperand, operator = null, secondOperand = null) {
  this.firstOperand = firstOperand
  this.operator = operator
  this.secondOperand = secondOperand
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
}
