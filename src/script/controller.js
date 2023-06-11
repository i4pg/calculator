const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
let recentOperation = null // used to handle operation object => {firstOp,secondOp,operator}
let isNewOperand = true
let isFloat = false

function resetDisplay() {
  display.textContent = 0
}

function displayResult() {
  display.textContent = getResult()
}

function getResult() {
  if (recentOperation?.hasBothOperands) {
    const result = recentOperation.calculate()
    const float = recentOperation.isFloatOperation()

    return float ? result.toFixed(2) : result
  }
}

function displayNumberController(number) {
  // get rid of left zero
  console.log(display.textContent)
  display.textContent === '0'
    ? display.textContent = number
    : display.textContent += number
}

function setRecentOperationOperands(operator = null) {
  operator
    ? recentOperation = new Operation(display.textContent, operator)
    : recentOperation.setSecondOperand(display.textContent)
}

function isNewOperandToggle() {
  // clear the display when there's an old result on the screen
  if (isNewOperand) {
    resetDisplay()
    isNewOperand = false
  }
}

function equalButton(immediateOperetor = null) {
  setRecentOperationOperands()
  displayResult()

  // assign result as first operand for new operation
  setRecentOperationOperands(immediateOperetor)
  isNewOperand = true
}

function operetorController(operator) {
  if (recentOperation && !recentOperation?.secondOperand) {
    equalButton(operator)
  } else {
    setRecentOperationOperands(operator)
    resetDisplay()
  }
  isFloat = false
}

function setFloatCalculation() {
  isFloat = true
  displayNumberController('.')
}

function buttonsController(e) {
  const button = e.target.textContent

  if (/\d/.test(button)) {
    isNewOperandToggle()
    displayNumberController(button)
  } else if (/[\.]/.test(button) && !isFloat) {
    isNewOperandToggle()
    setFloatCalculation()
  } else if (/[AC||C||~]/.test(button)) {
    displayResult()
  } else if (/=/.test(button) && recentOperation?.firstOperand) {
    equalButton()
  } else if (/[\+||\-||\^||\×||\÷]/.test(button)) {
    operetorController(button)
  }
}

Array
  .from(buttons)
  .forEach(button =>
    button.addEventListener('click', buttonsController)
  )
