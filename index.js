let var1 = 0
let var2 = 0
let operator = ""
const display = document.querySelector("#display")

function multiply(var1, var2) {
    // did it like this so that var1 is set to answer and ready for the nxt equation
    temp = var1
    var1 = temp + var2
}

function divide(var1, var2) {
    return var1 / var2
}

function add(var1, var2) {
    return var1 + var2
}

function subtract(var1,var2) {
    return var1-var2
}

// outputs text to calc display
function display(text) {
    display.textContent = f`${text}`
}

// Resets vars and display
function clear() {
    var1 = 0
    var2 = 0
    operator = ""
    display.textContent = ""
}

// operator recieved from button id, then called on eventlistener
function operate(var1, operator, var2) {
    if (operator == "*") {
        multiply(var1, var2)
    } else if (operator == "/") {
        divide(var1, var2)
    } else if (operator == "+") {
        add(var1, var2)
    } else if (operator == "-") {
        subtract(var1, var2)
    }
}

