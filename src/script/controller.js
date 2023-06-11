function operetorController(operator) {
  if (recentOperation && !recentOperation?.secondOperand) {
    equalButton(operator)
  } else {
    setRecentOperationOperands(operator)
    resetDisplay()
  }
  isFloat = false
}

function buttonsController(e) {
  const button = e.type === 'keyup'
    ? e.key
    : e.target.getAttribute('value')

  if (/\d/.test(button)) {
    newOperandToggle()
    displayNumberController(button)
  } else if (/[\.]/.test(button) && !isFloat) {
    newOperandToggle()
    setFloatCalculation()
  } else if (/^C$/.test(button)) {
    resetDisplay()
  } else if (/^AC$/.test(button)) {
    resetAll()
  } else if (/=/.test(button) && recentOperation?.firstOperand) {
    equalButton()
  } else if (/[\+||\-||\^||\*||\/]/.test(button)) {
    operetorController(button)
  } else if (/Backspace/.test(button)) {
    backspace()
  }
}

Array
  .from(buttons)
  .forEach(button =>
    button.addEventListener('click', buttonsController)
  )

addEventListener('keyup', buttonsController)
