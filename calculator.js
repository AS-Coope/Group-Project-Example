let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let operation = document.getElementById("operation");
let answer = document.getElementById("answer");
let errorPara = document.getElementById("error");

// BUTTONS
let divisionBtn = document.getElementById("division");
let addBtn = document.getElementById("add");
let multBtn = document.getElementById("multiply");
let subtractBtn = document.getElementById("subtract")


function add(addend1, addend2) {

}

function subtract(minuend, subtrahend) {

}

function multiply(multiplicand, multiplier) {

}

function divide(dividend, divisor) {

}

/* let error = false;

function clearError() {
    error = false;
    errorPara.textContent = "";
    return error;
}

function setError(errorMessage) {
    errorPara.textContent = `${errorMessage}`;
    error = true;
    return error;
}

function checkIfEmpty() {

    if (firstNum.value === "") {
        return setError("The first number is empty!")
    }

    if (secondNum.value === "") {
        return setError("The second number is empty!")
    }
}

function checkIfNaN() {
    if (Number(firstNum.value) !== Number) {
        return setError("Enter the first number!");
    }

    if (Number(secondNum.value) !== Number) {
        return setError("Enter the second number!");
    }
}

function checkDivideByZero() {

    // cannot check divide by zero error if nothing is entered or 
    // whatever is entered is not a number
    if (checkIfEmpty() === true || checkIfNaN() === true) {
        return error;
    } else {
        // check the divide by zero error
        if (Number(secondNum.value) === 0) {
            return setError("Cannot divide by zero!");
        }
        else {
            return clearError();
        }
    }
}


function add() {
    let total;
    if (checkIfEmpty() == true || checkIfNaN() == true) {
        return error;
    } else {
        total = Number(firstNum.value) + Number(secondNum.value);
        answer.textContent = total;
    }

}

function subtract() {

}

function multiply() {

}

function divide() {
    // first check if a divide by zero is happening
    let isLegalToDivide = checkDivideByZero();
    let quotient;
    // if no divide by zero is happening then divide
    if (isLegalToDivide === false) {
        // divide
        quotient = Number(firstNum.value) / Number(secondNum.value);
        answer.textContent = (Math.round(quotient * 100)) / 100; // 'efficient' rounding
        operation.textContent = "/";
        clearError();
    }
}

addBtn.addEventListener("click", () => {
    add();
});

divisionBtn.addEventListener("click", () => {
    divide()
});
 */