// array with all the operations
let operationString = '';
let operationArray = [];

// getting the nodes
const screen = document.querySelector('.calculator__screen');
const screenOperation = document.querySelector('.calculator__operation');
const screenResult = document.querySelector('.calculator__result');
const clearBtn = document.querySelector('.calculator__clear');

const divideBtn = document.querySelector('.calculator__divide');
const multiplyBtn = document.querySelector('.calculator__multiply');
const substractBtn = document.querySelector('.calculator__substract');
const addBtn = document.querySelector('.calculator__add');

const equalBtn = document.querySelector('.calculator__equal');
const dotBtn = document.querySelector('.calculator__dot');

// all the number buttons are here | numberBtn[1] = 1, numberBtn[2] = 2 ...
const numberBtn = document.querySelectorAll('.number');
console.table(numberBtn);

// main functions
function add(a, b) {
    return a + b;
}

function substract(numArray) {
    return a - b;
}

function multiply(numArray) {
    return a * b;
}

function divide(numArray) {
    return a / b;
}

function operate(a, b, operation) {
    return operation(a, b);
}

numberBtn.forEach((button) => {
    button.addEventListener('click', () => {
        operationString += button.textContent;
        screenOperation.textContent = operationString;
    });
});
