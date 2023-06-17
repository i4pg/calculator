// decleare calculator Values
let firstOperand = null,
  seconedOperand = null,
  previusResult = null,
  lastResult = null,
  currentOperate = null,
  finalResult = null;

// decleare HTML Variables
const calculator = document.getElementById("calc"),
  buttons = document.querySelectorAll(".bt"),
  numbers = document.querySelectorAll(".num"),
  operations = document.querySelectorAll(".op"),
  input = document.getElementById("input"),
  equal = document.getElementById("equal"),
  clear = document.getElementById("clear"),
  decimal = document.getElementById("decimal"),
  backspace = document.getElementById("backspace"),
  audio = document.querySelector("[value='clicked']");

// Add Keyboard Support
let kbd = (e) => {
  keyboardObj = {
    operators: ["+", "*", "-", "/", "%"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    editing: ["Delete", "Backspace", "."],
    equal: ["=", "Enter"],
  };

  for (let key in keyboardObj) {
    let currentKBD = keyboardObj[key][keyboardObj[key].indexOf(e.key)];
    keyboardObj[key].map((eachArray) => {
      e.key === eachArray
        ? keyboardObj.operators.includes(currentKBD)
          ? calculate(e.key)
          : keyboardObj.numbers.includes(currentKBD)
          ? toScreen(Number(e.key))
          : keyboardObj.equal.includes(currentKBD)
          ? equalCalculate(e)
          : keyboardObj.editing.includes(currentKBD)
          ? currentKBD === "Delete"
            ? AC(e)
            : currentKBD === "Backspace"
            ? C(e)
            : currentKBD === "."
            ? floatingPointNumbers(currentKBD)
            : ""
          : ""
        : "";
    });
  }
};

document.body.addEventListener("keydown", (e) => kbd(e));

// backspace when C pressed
let C = () => {
  addTransition(backspace);
  !input.textContent
    ? ""
    : (input.innerText = input.textContent.slice(
        0,
        input.textContent.length - 1
      ));
};

backspace.addEventListener("click", (e) => C(e));

// Clear everything when AC pressed
let AC = (error) => {
  addTransition(clear);
  error;
  firstOperand = null;
  seconedOperand = null;
  previusResult = null;
  lastResult = null;
  currentOperate = null;
  finalResult = null;
  input.textContent = "";
};

clear.addEventListener("click", (e) => AC(e));

// add decimal button support
let regEx = /\./;
let floatingPointNumbers = (point) => {
  addTransition(decimal);
  !regEx.test(input.textContent) ? (input.innerText += point) : "";
};

decimal.addEventListener("click", (e) =>
  floatingPointNumbers(e.target.innerText)
);

// shows user input, pressing buttons
let toScreen = (e) => {
  if (typeof e !== "number") {
    number = e.target.innerText;
    addTransition(e.target);
  } else {
    number = e;
  }
  if (!finalResult) {
    input.innerText += number;
  } else if (input.textContent === finalResult.toFixed(2)) {
    AC();
    input.innerText = number;
  } else {
    input.innerText += number;
  }
};

numbers.forEach((click) => click.addEventListener("click", (e) => toScreen(e)));

// Calculation method
const add = (x, y) => +x + +y,
  subtract = (x, y) => +x - +y,
  multiply = (x, y) => +x * +y,
  divide = (x, y) => +x / +y,
  module = (x, y) => +x % +y;

// inputs value (operands & operate), get & check, invoke its fn
let operate = (operator, x, y) =>
  operator === "/"
    ? x === "0"
      ? AC(alert("Error! Can't divide by Zero"))
      : divide(x, y)
    : operator === "+"
    ? add(x, y)
    : operator === "-"
    ? subtract(x, y)
    : operator === "*"
    ? multiply(x, y)
    : operator === "%"
    ? module(x, y)
    : "";

// Main fn
// calculate inputs when any operation button being clicked
let calculate = (e) => {
  if (typeof e === "object") {
    addTransition(e.target);
    e = e.target.textContent;
  }
  if (!firstOperand) {
    currentOperate = e;
    firstOperand = input.textContent;
    input.textContent = "";
    return firstOperand, currentOperate;
  } else if (!previusResult) {
    seconedOperand = input.textContent;
    previusResult = operate(currentOperate, firstOperand, seconedOperand);
    input.textContent = "";
    currentOperate = e;
  } else if (!finalResult) {
    lastResult = operate(currentOperate, previusResult, input.textContent);
    previusResult = lastResult;
    input.textContent = "";
    currentOperate = e;
    return currentOperate;
  } else if (finalResult && previusResult !== finalResult) {
    lastResult = operate(currentOperate, previusResult, input.textContent);
    previusResult = lastResult;
    input.textContent = "";
    currentOperate = e;
    return currentOperate;
  } else if (finalResult) {
    previusResult = input.textContent;
    input.textContent = "";
    currentOperate = e;
    return currentOperate;
  }
};

operations.forEach((operator) =>
  operator.addEventListener("click", (e) => calculate(e))
);

// shows result in display
let equalCalculate = () => {
  addTransition(equal);
  if (!input.textContent) return;
  else if (previusResult) {
    lastResult = input.textContent;
    finalResult = operate(currentOperate, previusResult, lastResult);
    input.textContent = finalResult.toFixed(2);
    previusResult = finalResult;
  } else {
    finalResult = operate(currentOperate, firstOperand, input.textContent);
    input.textContent = finalResult.toFixed(2);
    previusResult = finalResult;
  }
};

equal.addEventListener("click", (e) => equalCalculate(e));

// play sound when key clicked

let removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("active");
};

let addTransition = (e) => {
  e.classList.add("active");
};

buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);
