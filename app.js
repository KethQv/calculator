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