const ERROR_MESSAGE = "Oops! Illegal operation";

function isMathError() {
  return !/\d+|\./.test(display.textContent);
}

function displayErrorMessage() {
  display.textContent = ERROR_MESSAGE;
}
