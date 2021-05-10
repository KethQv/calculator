// array with all the operations
let operationString = '';
let operationArray = [];
let operationResult = '';

let dotBtnAlreadyPressed = false;
let operationBtnAlreadyPressed = false;

// getting the nodes
const screen = document.querySelector('.calculator__screen');
const screenOperation = document.querySelector('.calculator__operation');
const screenResult = document.querySelector('.calculator__result');
const clearBtn = document.querySelector('.calculator__clear');

const equalBtn = document.querySelector('.calculator__equal');
const dotBtn = document.querySelector('.calculator__dot');

const operations = [
    { name: 'divide', symbol: '/', function: divide, button: document.querySelector('.calculator__divide') },
    { name: 'multiply', symbol: '*', function: multiply, button: document.querySelector('.calculator__multiply') },
    { name: 'substract', symbol: '-', function: substract, button: document.querySelector('.calculator__substract') },
    { name: 'add', symbol: '+', function: add, button: document.querySelector('.calculator__add') }
];

// all the number buttons are here | numberBtn[1] = 1, numberBtn[2] = 2 ...
const numberBtn = document.querySelectorAll('.number-button');

// main functions
function divide(numArray) {
    return a / b;
}

function multiply(numArray) {
    return a * b;
}

function substract(numArray) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function operate(a, b, operation) {
    return operation(a, b);
}

function evaluateOperation() {
    operationArray = operationString.split(' ');

    // here is the main logic of the calculator

}

function displayOperation(content) {
    operationString += content;
    screenOperation.textContent = operationString;

    // evaluateOperation();
}

function displayResult() {
    screenResult.textContent = operationResult;
}

// event listeners
numberBtn.forEach((button) => {
    button.addEventListener('click', () => {
        displayOperation(button.textContent);
        operationBtnAlreadyPressed = false;
    });
});

dotBtn.onclick = () => {
    if (operationString.charAt(operationString.length-1) != '.' && !dotBtnAlreadyPressed) {
        displayOperation(dotBtn.textContent);
        dotBtnAlreadyPressed = true;
    }
};

clearBtn.onclick = () => {
    operationString = '';
    displayOperation(operationString);

    operationArray = [];
    // evaluateOperation();
    displayResult();

    operationBtnAlreadyPressed = false;
    dotBtnAlreadyPressed = false;
};

operations.map((operation) => {
    operation.button.addEventListener('click', () => {
        if (!operationBtnAlreadyPressed && operationString != '') {
            displayOperation(` ${operation.symbol} `);
            operationBtnAlreadyPressed = true;
            dotBtnAlreadyPressed = false;
        } 
    });
});





























// const divideBtn = document.querySelector('.calculator__divide');
// const multiplyBtn = document.querySelector('.calculator__multiply');
// const substractBtn = document.querySelector('.calculator__substract');
// const addBtn = document.querySelector('.calculator__add');