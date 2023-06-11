function operetorController(operator) {
  if (recentOperation && !recentOperation?.secondOperand) {
    equalButton(operator)
  } else {
    setRecentOperationOperands(operator)
    resetDisplay()
  }
  isFloat = false
}

function buttonsController(button) {
  if (/\d/.test(button)) {
    playSound()
    newOperandToggle()
    displayNumberController(button)
  } else if (/[\.]/.test(button) && !isFloat) {
    playSound()
    newOperandToggle()
    setFloatCalculation()
  } else if (/^C$/.test(button)) {
    playSound()
    resetDisplay()
  } else if (/^AC$/.test(button)) {
    playSound()
    resetAll()
  } else if (/[=||^Enter$]/.test(button) && recentOperation?.firstOperand) {
    playSound()
    equalButton()
  } else if (/[\+||\-||\^||\*||\/]/.test(button)) {
    playSound()
    operetorController(button)
  } else if (/Backspace/.test(button)) {
    playSound()
    backspace()
  }
}

function setEventType(e) {
  const event
    = e.type === 'keyup'
      ? e.key
      : e.target.getAttribute('value')

  buttonsController(event)
}

Array
  .from(buttons)
  .forEach(button =>
    button
      .addEventListener('click', setEventType)
  )

addEventListener('keyup', setEventType)
