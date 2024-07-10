let error = document.getElementById("error");

let numkeys = document.getElementsByClassName("numkey");
for (let i = 0; i < numkeys.length; i++) {
    elem = numkeys[i];
    elem.addEventListener('click', () => {
        error.textContent += numkeys[i].textContent;
    });
}

// OPERATION FUNCTIONS
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
        error.textContent = "Sorry, cannot divide by zero (0)";
    } else {
        let quotient = dividend / divisor;
        operation.textContent = "/"; // update operation sign
        answer.textContent = (Math.round(quotient * 100)) / 100; // rounding to 2 decimal places
    }
}

// since all the operations (the event listener's, specifically) have the same content,
// this higher order function reduces duplication of code
function arbitraryOperation(func) {
    error.textContent = ""; // always clear the error message

    if (firstNum.value === "" || secondNum.value === "") {
        // checks that the textbox isn't empty when an operation is clicked
        error.textContent = "Please enter a number.";
    } else if (isNaN(firstNum.value) || isNaN(secondNum.value)) {
        // checks if text or symbols or anything that is not a number is entered
        error.textContent = "There is a value that is not a number.";
    } else {
        func(Number(firstNum.value), Number(secondNum.value));
    }
}

// EVENT LISTENERS
addBtn.addEventListener('click', () => {
    arbitraryOperation(add);
});

subtractBtn.addEventListener('click', () => {
    arbitraryOperation(subtract);
});

multBtn.addEventListener('click', () => {
    arbitraryOperation(multiply);
});

divisionBtn.addEventListener('click', () => {
    arbitraryOperation(divide);
});



// enter number
// press an operation but don't update the screen
// whatever number is in the div, let that be the 