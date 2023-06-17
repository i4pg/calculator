function addHoverEffect(button) {
  const element = document.querySelector(`[value="${button}"]`)
  element.classList.toggle('kb-hover')
  setTimeout(() => element.classList.toggle('kb-hover'), 300)
}

function displayResult() {
  display.textContent = getResult();
}

function removeLastOperand() {
  display.textContent.length === 1
    ? resetDisplay()
    : (display.textContent = display.textContent
      .split("")
      .slice(0, -1)
      .join(""));
}

function insertToDisplay(number) {
  display.textContent === "0"
    ? (display.textContent = number)
    : (display.textContent += number);
}

function toggleNegative() {
  if (isNegativeOperand()) {
    positiveValue = display.textContent.split('')
    positiveValue.shift()
    display.textContent = positiveValue.join('')
  } else {
    negativeValue = display.textContent.split('');
    negativeValue.unshift('-');
    display.textContent = negativeValue.join("");
  }
}
