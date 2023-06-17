const ERROR_MESSAGE = "Oops! Illegal operation";

function isMathError() {
  return !/\d+|\./.test(display.textContent);
}

function displayErrorMessage() {
  display.textContent = ERROR_MESSAGE;
}

function isValidButton(userButton) {
  const validButtons = Object.values(buttonsRegex);
  return validButtons.some((button) => button.test(userButton));
}
