let history = '';
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendSymbol(symbol) {
    if (currentInput === '' && symbol !== '-') return;
    history += currentInput + ' ' + symbol + ' ';
    currentInput = '';
    updateDisplay();
}

function clearAll() {
    history = '';
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        history += currentInput;
        currentInput = eval(history.replace(/%/g, '/100')).toString();
        history = '';
        updateDisplay();
    } catch (e) {
        clearAll();
        alert('Invalid calculation');
    }
}

function updateDisplay() {
    document.getElementById('history').innerText = history;
    document.getElementById('result').innerText = currentInput;
}