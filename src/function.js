document.addEventListener('keydown', function(event) {
  const key = event.key;
  switch (key) {
    case '0':
      onNumberClick(0);
      break;
    case '1':
      onNumberClick(1);
      break;
    case '2':
      onNumberClick(2);
      break;
    case '3':
      onNumberClick(3);
      break;
    case '4':
      onNumberClick(4);
      break;
    case '5':
      onNumberClick(5);
      break;
    case '6':
      onNumberClick(6);
      break;
    case '7':
      onNumberClick(7);
      break;
    case '8':
      onNumberClick(8);
      break;
    case '9':
      onNumberClick(9);
      break;
    case '+':
      onOperationClick('+');
      break;
    case '-':
      onOperationClick('-');
      break;
    case '*':
      onOperationClick('*');
      break;
    case '/':
      onOperationClick('/');
      break;
    case 'Enter':
      onEqualsClick();
      break;
    case 'Backspace':
      onBackspaceClick();
      break;
    case 'c':
    case 'C':
      onClearClick();
      break;
    default:
      break;
  }
});


// Function to operate
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    if (num1 === 0) {
      return NaN;
    } else if (num1 > 0) {
      return "undefined";
    } else {
      return "-undefined";
    }
  } else {
    return num1 / num2;
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}

// Click event handlers
let firstNum = 0;
let secondNum = 0;
let operator = '';
let result = 0;

function onNumberClick(num) {
  if (operator === '') {
    firstNum = (firstNum * 10) + num;
    document.getElementById('result').textContent = firstNum;
  } else {
    secondNum = (secondNum * 10) + num;
    document.getElementById('result').textContent = secondNum;
  }
}

function onOperationClick(op) {
  operator = op;
}

function onClearClick() {
  firstNum = 0;
  secondNum = 0;
  operator = '';
  result = 0;
  document.getElementById('result').textContent = '0';
}

function onBackspaceClick() {
  if (operator === '') {
    firstNum = Math.floor(firstNum / 10);
    document.getElementById('result').textContent = firstNum;
  } else {
    secondNum = Math.floor(secondNum / 10);
    document.getElementById('result').textContent = secondNum;
  }
}

function onEqualsClick() {
  result = operate(operator, firstNum, secondNum);
  document.getElementById('result').textContent = result;
  firstNum = result;
  secondNum = 0;
  operator = '';
} 

  window.onload = function() {
  // Add event listeners to the number buttons
document.getElementById('btn-0').addEventListener('click', function() { onNumberClick(0); });
document.getElementById('btn-1').addEventListener('click', function() { onNumberClick(1); });
document.getElementById('btn-2').addEventListener('click', function() { onNumberClick(2); });
document.getElementById('btn-3').addEventListener('click', function() { onNumberClick(3); });
document.getElementById('btn-4').addEventListener('click', function() { onNumberClick(4); });
document.getElementById('btn-5').addEventListener('click', function() { onNumberClick(5); });
document.getElementById('btn-6').addEventListener('click', function() { onNumberClick(6); });
document.getElementById('btn-7').addEventListener('click', function() { onNumberClick(7); });
document.getElementById('btn-8').addEventListener('click', function() { onNumberClick(8); });
document.getElementById('btn-9').addEventListener('click', function() { onNumberClick(9); });

// Add event listeners to the operator buttons
document.getElementById('btn-plus').addEventListener('click', function() { onOperationClick('+'); });
document.getElementById('btn-minus').addEventListener('click', function() { onOperationClick('-'); });
document.getElementById('btn-multiply').addEventListener('click', function() { onOperationClick('*'); });
document.getElementById('btn-divide').addEventListener('click', function() { onOperationClick('/'); });

// Add event listeners to the other buttons
document.getElementById('btn-clear').addEventListener('click', onClearClick);
document.getElementById('btn-backspace').addEventListener('click', onBackspaceClick);
document.getElementById('btn-equals').addEventListener('click', onEqualsClick);

  }