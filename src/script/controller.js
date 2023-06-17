const buttonsRegex = {
  negative: /^negative$/,
  digit: /^\d$/,
  float: /^\.$/,
  C: /^C$/,
  AC: /^AC$/,
  operators: /[\+\-\^\*\/]/,
  backspace: /^Backspace$/i,
  evaluate: /=|Enter|\ /,
};

function operetorController(operator) {
  if (recentOperation && !recentOperation?.secondOperand) {
    evaluate(operator);
  } else {
    setRecentOperationOperands(operator);
    resetDisplay();
  }
  isFloat = false;
}

function buttonsController(button) {
  if (!isValidButton(button)) {
    return;
  }

  if (isMathError()) {
    resetAll();
  }

  playSound();

  if (buttonsRegex.digit.test(button)) {
    newOperandToggle();
    insertToDisplay(button);
  } else if (buttonsRegex.float.test(button) && !isFloat) {
    newOperandToggle();
    setFloatCalculation();
  } else if (buttonsRegex.C.test(button)) {
    resetDisplay();
  } else if (buttonsRegex.AC.test(button)) {
    resetAll();
  } else if (buttonsRegex.operators.test(button)) {
    operetorController(button);
  } else if (buttonsRegex.backspace.test(button)) {
    removeLastOperand();
  } else if (
    buttonsRegex.evaluate.test(button) &&
    recentOperation?.firstOperand
  ) {
    evaluate();
  }

  if (isMathError()) {
    displayErrorMessage();
  }
}

function setEventType(e) {
  const event = e.type === "keyup" ? e.key : e.target.getAttribute("value");

  buttonsController(event);
}

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", setEventType)
);

addEventListener("keyup", setEventType);
