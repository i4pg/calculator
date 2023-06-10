const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
let liveOperation = null // used to handle operation object => {firstOp,secondOp,operator}
let isNewOperand = true

function resetDisplay() {
  display.textContent = 0
}

function displayResult() {
  display.textContent = getResult()
}

function insertNumberToDisplay(number) {
  if (display.textContent[0] === '0') {
    display.textContent = number
  } else {
    display.textContent += number
  }
}

function emptyDisplay() {
  if (isNewOperand) {
    resetDisplay()
    isNewOperand = false
  }
}

function prepareNewOpration(operator) {
  if (operator) {
    liveOperation = new Operation(display.textContent, operator)
  }
  isNewOperand = true
}

function setOperands(operator = null) {
  if (!liveOperation) {
    liveOperation = new Operation(display.textContent, operator)
    resetDisplay()
  } else if (!liveOperation.secondOperand) {
    liveOperation.setSecondOperand(display.textContent)
    displayResult()
    prepareNewOpration(operator)
  } else {
    liveOperation = new Operation(display.textContent, operator)
    resetDisplay()
    console.log('3')
  }
}

function getResult() {
  if (liveOperation?.hasBothOperands) {
    return liveOperation.calculate()
  }
}

function buttonsController(e) {
  const button = e.target.textContent

  if (/\d/.test(button)) {
    emptyDisplay()
    insertNumberToDisplay(button)
  } else if (/[AC||C||~||\.]/.test(button)) {
    displayResult(button)
  } else if (/=/.test(button) && liveOperation?.firstOperand) {
    setOperands()
  } else if (/[\+||\-||\^||\×||\÷]/.test(button)) {
    setOperands(button)
  }
}

Array
  .from(buttons)
  .forEach(button =>
    button.addEventListener('click', buttonsController)
  )
