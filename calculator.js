let error = document.getElementById("error");

// KEYS
// Num Keys
let numkeys = document.getElementsByClassName("numkey");

// Operation Keys
let delKey = document.getElementById("delkey");
let addKey = document.getElementById("addkey");
let subKey = document.getElementById("subkey");
let multKey = document.getElementById("multkey");
let divKey = document.getElementById("divkey");
let equalKey = document.getElementById("equalkey");

let operation = "+";

// Variables
let firstNum;
let secondNum;

// Event listener for all keys so they are added to the display when clicked
for (let i = 0; i < numkeys.length; i++) {
    elem = numkeys[i];
    elem.addEventListener('click', () => {
        error.textContent += numkeys[i].textContent;
    });
}

delKey.addEventListener('click', () => {
    if (error.textContent.length > 0) {
        error.textContent = error.textContent.slice(0, -1);
    } else {
        console.log("No text in the display");
    }
});

// OPERATION FUNCTIONS
function add(/*addend1, addend2*/) {
    operation = "+"
    let total = addend1 + addend2;
    operation.textContent = "+"; // update operation sign
    answer.textContent = total;
}

function subtract(/*minuend, subtrahend*/) {
    operation = "-"
    let diff = minuend - subtrahend;
    operation.textContent = "-"; // update operation sign
    answer.textContent = diff;
}

function multiply(/*multiplicand, multiplier*/) {
    operation = "*"
    let product = multiplicand * multiplier;
    operation.textContent = "*"; // update operation sign
    answer.textContent = product;
}

function divide(/*dividend, divisor*/) {
    operation = "/";

    // a check to ensure no dividing by zero

    error.textContent = (Math.round((firstNum / secondNum) * 100)) / 100; // rounding to 2 decimal places

}

// since all the operations (the event listener's, specifically) have the same content,
// this higher order function reduces duplication of code
function arbitraryOperation() {
    //error.textContent = ""; // always clear the error message
    if (error.textContent === "") {
        console.log("No numbers to add");
    } else {
        firstNum = Number(error.textContent);
        console.log(`First Number: ${firstNum}`);
        error.textContent = "";
    }
}
// EVENT LISTENERS

equalKey.addEventListener('click', () => {
    secondNum = Number(error.textContent);
    console.log(`Second Number: ${secondNum}`);
    if (operation === "+") {
        error.textContent = firstNum + secondNum;
    } else if (operation === "-") {
        error.textContent = firstNum - secondNum;
    } else if (operation === "*") {
        error.textContent = firstNum * secondNum;
    } else if (operation === "/") {
        error.textContent = Math.round((firstNum / secondNum) * 100) / 100;
    }
});

addKey.addEventListener('click', () => {
    operation = "+";
    arbitraryOperation();
});

subKey.addEventListener('click', () => {
    operation = "-";
    arbitraryOperation(subtract);
});

multKey.addEventListener('click', () => {
    operation = "*";
    arbitraryOperation(multiply);
});

divKey.addEventListener('click', () => {
    operation = "/";
    arbitraryOperation();
});