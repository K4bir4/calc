let currentExpression = '';

function appendValue(value) {
  currentExpression += value;
  document.getElementById('result').value = currentExpression;
}

function clearResult() {
  currentExpression = '';
  document.getElementById('result').value = '';
}

function performOperation(operator) {
  currentExpression += operator;
  document.getElementById('result').value = currentExpression;
}

function calculate() {
  try {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
