// Global Variables
let currentNum = '';
let savedNum = '';
let currentOperation = '';

// Calculation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Operation function
function operate(operator, a, b) {
  return operator(a, b);
}

// Display functions
const displayText = document.querySelector('.displayText');
// Initial Display
setDisplay(currentNum);

function setDisplay() {
  displayText.innerHTML = currentNum === '' ? '0' : currentNum;
}

// Number Buttons
const numButtons = [...document.querySelectorAll('.numButton')];
numButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let num = this.firstElementChild.innerHTML;
    currentNum = currentNum + num;
    setDisplay();
  })
});

// Clear Button
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  currentNum = '';
  savedNum = '';
  setDisplay();
});

// Decimal Button
const decimalBtn = document.querySelector('.decimalButton');
decimalBtn.addEventListener('click', () => {
  // Adds a decimal only if current number does not contain one.
  // This keeps from adding unnecessary decimals into numbers, avoiding errors.
  if (currentNum.indexOf('.') === -1) {
    currentNum = currentNum + '.';
    setDisplay();
  }
});

// Operator Buttons
const operators = [...document.querySelectorAll('.operator')];
operators.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (savedNum !== '' && currentOperation !== '') {
      calculate();
    }
    savedNum = currentNum;
    currentNum = '';
    currentOperation = this.id;
  })
});

// Equals Button
const equalsBtn = document.querySelector('.equalButton');
equalsBtn.addEventListener('click', function () {
  if (currentOperation === '') return;
  calculate();
  currentOperation = '';
});

function calculate() {
  let operation = operate(window[currentOperation], parseFloat(savedNum), parseFloat(currentNum));
  currentNum = operation.toString();
  if (currentNum.length > 17) {
    currentNum = currentNum.slice(0,18);
  }
  setDisplay();
}

// Button Click Display Function
const btns = [...document.querySelectorAll('.btn')];
btns.forEach(function (btn) {
  btn.addEventListener('mousedown', function () {
    this.classList.add('clicked');
  });
  btn.addEventListener('mouseup', function () {
    this.classList.remove('clicked');
  });
});