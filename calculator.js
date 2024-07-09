let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let operation = document.getElementById("operation");
let answer = document.getElementById("answer");
let errorPara = document.getElementById("error");

// BUTTONS
let divisionBtn = document.getElementById("division");
let addBtn = document.getElementById("add");
let multBtn = document.getElementById("multiply");
let subtractBtn = document.getElementById("subtract");


function add(addend1, addend2) {
    let total = addend1 + addend2;
    operation.textContent = "+"; // update operation sign
    answer.textContent = total;
}

function subtract(minuend, subtrahend) {
    let diff = minuend - subtrahend;
    operation.textContent = "-"; // update operation sign
    answer.textContent = diff;
}

function multiply(multiplicand, multiplier) {
    let product = multiplicand * multiplier;
    operation.textContent = "*"; // update operation sign
    answer.textContent = product;
}

function divide(dividend, divisor) {

    // a check to ensure no dividing by zero
    if (divisor === 0) {
        errorPara.textContent = "Sorry, cannot divide by zero (0)";
    } else {
        let quotient = dividend / divisor;
        operation.textContent = "/"; // update operation sign
        answer.textContent = (Math.round(quotient * 100)) / 100; // rounding to 2 decimal places
    }
}

// event listeners for each operation
addBtn.addEventListener('click', () => {
    errorPara.textContent = "";
    if (firstNum.value === "" || secondNum.value === "") {
        errorPara.textContent = "Please enter a number.";
    } else if (isNaN(firstNum.value) || isNaN(secondNum.value)) {
        // check if text or symbols or anything that is not a number is entered
        errorPara.textContent = "A number was not entered.";
    } else {
        add(Number(firstNum.value), Number(secondNum.value));
    }
});

subtractBtn.addEventListener('click', () => {
    errorPara.textContent = "";
    subtract(Number(firstNum.value), Number(secondNum.value));
});

multBtn.addEventListener('click', () => {
    errorPara.textContent = "";
    multiply(Number(firstNum.value), Number(secondNum.value));
});

divisionBtn.addEventListener('click', () => {
    errorPara.textContent = "";
    divide(Number(firstNum.value), Number(secondNum.value));
});