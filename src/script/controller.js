const buttons = document.querySelectorAll('.button')
const display = document.getElementById('display')
let liveOperation = null // used to handle operation object => {firstOp,secondOp,operator}
let isNewOperand = true

function resetDisplay() {
  display.textContent = 0
}

function getResult() {
  if (liveOperation?.hasBothOperands) {
    return liveOperation.calculate()
  }
}

function displayResult() {
  display.textContent = getResult()
}

function displayNumberController(number) {
  // clear the display when there's an old result on the screen
  if (isNewOperand) {
    resetDisplay()
    isNewOperand = false
  }

  // get rid of left zero
  display.textContent === '0'
    ? display.textContent = number
    : display.textContent += number
}


function setNewOpration(immediateOperetor) {
  // immediateOperetor: get first operand for next operation
  // from last operation's result
  immediateOperetor
    ? liveOperation = new Operation(display.textContent, immediateOperetor)
    : ""
  isNewOperand = true
}

function operetorController(operator) {
  if (!liveOperation) {
    liveOperation = new Operation(display.textContent, operator)
    resetDisplay()
  } else if (!liveOperation.secondOperand) {
    equalButton(operator)
  } else {
    liveOperation = new Operation(display.textContent, operator)
    resetDisplay()
  }
}


function equalButton(immediateOperetor = null) {
  liveOperation.setSecondOperand(display.textContent)
  displayResult()
  setNewOpration(immediateOperetor)
}

function buttonsController(e) {
  const button = e.target.textContent

  if (/\d/.test(button)) {
    displayNumberController(button)
  } else if (/[AC||C||~||\.]/.test(button)) {
    displayResult(button)
  } else if (/=/.test(button) && liveOperation?.firstOperand) {
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
