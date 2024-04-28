// script.js
let currentDisplay = '';

function appendToDisplay(value) {
    currentDisplay += value;
    document.getElementById('display').innerText = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.getElementById('display').innerText = '0';
}

function calculate() {
    try {
        const result = eval(currentDisplay);
        document.getElementById('display').innerText = result;
        currentDisplay = result.toString();
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        currentDisplay = '';
    }
}
