const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
let result = 0
let recentOperation = null

function emptyDisplay() {
  display.textContent = ""
}


function Operation(firstOperand, operator, secondOperand = null) {
  this.firstOperand = firstOperand
  this.operator = operator
  this.secondOperand = secondOperand
  this.setSecondOperand = (operand) => {
    this.secondOperand = operand
  }
  this.calculate = () => {
    console.log(+this.firstOperand, +this.secondOperand, this.operator)
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

function displayResult() {
  display.textContent = result
}

function insertNumberToDisplay(number) {
  display.textContent += number
}

function buttonsController(e) {
  const button = e.target.textContent

  if (/\d/.test(button)) {
    insertNumberToDisplay(button)
  } else if (/[AC||C||~||\.]/.test(button)) {
    displayResult(button)
  } else if (/=/.test(button)) {
    equalButton()
  }
  else {
    return Operation.constructorController(button, display.textContent)
  }
}

function equalButton() {
  if (!recentOperation) {
    return
  }

  recentOperation.setSecondOperand(display.textContent)
  result = recentOperation.calculate()
  displayResult()
}

Array
  .from(buttons)
  .forEach(_ =>
    addEventListener('click', buttonsController)
  )

emptyDisplay()
