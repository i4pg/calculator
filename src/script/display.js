function addHoverEffect(button) {
  // Finally I found a good use case for `var`
  // `let` and `const` available within if block scope
  // `var` available within the function scope
  // And it's not global variable ! best case ~
  if (buttonsRegex.evaluate.test(button)) {
    var element = document.querySelector(`[value="="]`)
  } else {
    var element = document.querySelector(`[value="${button}"]`)
  }

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
