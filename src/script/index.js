const buttonSound = document.getElementById('button-sound')
const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
let recentOperation = null // used to handle operation object => {firstOp,secondOp,operator}
let isNewOperand = true
let isFloat = false

function playSound() {
  buttonSound.currentTime = 0
  buttonSound.play()
}

function resetAll() {
  recentOperation = null
  resetDisplay()
}

function setFloatCalculation() {
  isFloat = true
  displayNumberController('.')
}

function resetDisplay() {
  display.textContent = 0
}

function displayResult() {
  display.textContent = getResult()
}

function backspace() {
  display.textContent = display.textContent.split('').slice(1).join("")
  display.textContent === ""
    ? resetDisplay()
    : ""
}

function getResult() {
  if (recentOperation?.hasBothOperands) {
    let result = recentOperation.calculate()
    let isFloatOperation = recentOperation.isFloatOperation()
    return isFloatOperation ? result.toFixed(2) : result
  }
}

function displayNumberController(number) {
  // get rid of left zero
  display.textContent === '0'
    ? display.textContent = number
    : display.textContent += number
}

function setRecentOperationOperands(operator = null) {
  operator
    ? recentOperation = new Operation(display.textContent, operator)
    : recentOperation.setSecondOperand(display.textContent)
}

function newOperandToggle() {
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
