const buttonSound = document.getElementById("button-sound");
const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");
let recentOperation = null; // handle operation object => {firstOp,secondOp,operator}
let isNewOperand = true;
let isFloat = false;
let sound = true;

function isValidButton(userButton) {
  const validButtons = Object.values(buttonsRegex);

  return validButtons.some((button) => button.test(userButton));
}

function isNegativeOperand() {
  return display.textContent.indexOf('-') > -1;
}

function playSound() {
  if (sound) {
    buttonSound.currentTime = 0;
    buttonSound.play();
  }
}

function setFloatCalculation() {
  isFloat = true;
  insertToDisplay(".");
}

function getResult() {
  if (recentOperation?.hasBothOperands) {
    const floatRegex = /\./;
    const result = recentOperation.calculate();

    return floatRegex.test(result) ? result.toFixed(2) : result;
  }
}

function newOperandToggle() {
  if (isNewOperand) {
    resetDisplay();
    isNewOperand = false;
  }
}

function setRecentOperationOperands(operator = null) {
  operator
    ? (recentOperation = new Operation(display.textContent, operator))
    : recentOperation.setSecondOperand(display.textContent);
}

function evaluate(immediateOperetor = null) {
  setRecentOperationOperands();
  displayResult();
  setRecentOperationOperands(immediateOperetor); // assign the result as first operand for new operation
  isNewOperand = true;
}
