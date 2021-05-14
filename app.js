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

const numberBtn = document.querySelectorAll('.number-button');

const operations = [
    { symbol: '/', function: divide, button: document.querySelector('.calculator__divide') },
    { symbol: '*', function: multiply, button: document.querySelector('.calculator__multiply') },
    { symbol: '-', function: substract, button: document.querySelector('.calculator__substract') },
    { symbol: '+', function: add, button: document.querySelector('.calculator__add') }
];

// main functions
function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function substract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function operate(a, b, operation) {
    return operation(a, b);
}

function displayOperation(content) {
    operationString += content;
    screenOperation.textContent = operationString;
    operationArray = operationString.split(' ');
    evaluateOperation();

    // evaluateOperation();
}

function displayResult(result) {
    screenResult.textContent = result;
}

function evaluateOperation() {

    let isThereMultiOrDiv = operationArray.some(digit => digit == '/' || digit == '*');
    let isThereAddOrSubs = operationArray.some(digit => digit == '-' || digit == '+');

    if (isThereMultiOrDiv) { 

        let indexOfMultiOrDiv = operationArray.findIndex(digit => digit == '/' || digit == '*');

        var a = parseFloat(operationArray[indexOfMultiOrDiv - 1]);
        var b = parseFloat(operationArray[indexOfMultiOrDiv + 1]);

        if (b != undefined || b != null || !isNaN(b)) {
            let result;

            if (operationArray[indexOfMultiOrDiv] == '/') {
                // call divide
                result = operate(a, b, divide);
            } else {
                // call multiply
                result = operate(a, b, multiply);
            }
            operationArray.splice(indexOfMultiOrDiv - 1, 3, result);
        } 

    } else if (isThereAddOrSubs) { 

        let indexOfAddOrSubs = operationArray.findIndex(digit => digit == '-' || digit == '+');

        var a = parseFloat(operationArray[indexOfAddOrSubs - 1]);
        var b = parseFloat(operationArray[indexOfAddOrSubs + 1]);

        if (b != undefined || b != null || !isNaN(b)) {
            let result;

            if (operationArray[indexOfAddOrSubs] == '-') {
                // call substract
                result = operate(a, b, substract);
            } else {
                // call add
                result = operate(a, b, add);
            }
            operationArray.splice(indexOfAddOrSubs - 1, 3, result);
        }

    }

    if (operationArray.length == 1) {
        if (!isNaN(operationArray[0])) {
            displayResult(operationArray[0]);
        }
        return;
    }

    evaluateOperation();
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

equalBtn.onclick = () => {
    operationArray = operationString.split(' ');
    evaluateOperation();
};

clearBtn.onclick = () => {
    operationString = '';
    displayOperation(operationString);

    operationArray = [];
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