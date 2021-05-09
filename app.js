// getting the nodes
const screen = document.querySelector('.calculator__screen');
const clearBtn = document.querySelector('.calculator__clear');

const divideBtn = document.querySelector('.calculator__divide');
const multiplyBtn = document.querySelector('.calculator__multiply');
const substractBtn = document.querySelector('.calculator__substract')
const addBtn = document.querySelector('.calculator__add')

const equalBtn = document.querySelector('.calculator__equal');
const dotBtn = document.querySelector('.calculator__dot');

// all the number buttons are here | numberBtn[1] = 1, numberBtn[2] = 2 ...
const numberBtn = document.querySelectorAll('.number');
console.table(numberBtn);

// main functions
function add(numArray) {
    const total = numArray.reduce((total, num) => {
        return total += num;
    }, 0);
    return total;
}

function substract(numArray) {
    const total = numArray.reduce((total, num) => {
        return total -= num;
    }, numArray[0] * 2);
    return total;
}

function multiply(numArray) {
    const total = numArray.reduce((total, num) => {
        return total *= num;
    }, 1);
    return total;
}

function divide(numArray) {
    const total = numArray.reduce((total, num) => {
        return total /= num;
    }, numArray[0] * numArray[0]);
    return total;
}

function operate(a, b, operation) {
    return operation([a, b]);
}

