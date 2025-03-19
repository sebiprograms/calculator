let var1 = undefined
let var2 = undefined
let operator = ""
const display = document.querySelector("#display")
const clrbtn = document.querySelector("#clear")
const addbtn = document.querySelector("#add")
const multbtn = document.querySelector("#multiply")
const subbtn = document.querySelector("#subtract")
const dividebtn = document.querySelector("#divide")
const equals = document.querySelector("#operate")

// arthimetic logic
function multiply(var1, var2) {
    if (var2 == undefined){
       return var1 * var1
    }
    
    return var1 * var2
}

function divide(var1, var2) {
    if (var2 == undefined){
        return var1 / var1
    }

    return var1 / var2
}

function add(var1, var2) {
    if (var2 == undefined){
        return var1 + var1
    }

    return var1 + var2
}

function subtract(var1,var2) {
    if (var2 == undefined){
        return var1 - var1
    }

    return var1 - var2
}

// outputs text to calc display
function updateDisplay(input) {
    display.textContent += input
}

// Resets vars and display
function clear() {
    var1 = undefined
    var2 = undefined
    operator = ""
    display.textContent = ""
}
// returns boolean depending on if arthimetic operator has been selected
function operatorPushed() {
    if (operator === ""){
        return false
    } else {
        return true
    }
}

function divideZero(var2) {
    if (var2 === 0) {
        return true
    } else {
        return false
    }
}

// operator recieved from button id, then called on eventlistener
function operate(var1, operator, var2) {

    if (operator == "*") {
        var1 = multiply(var1, var2)
    } else if (operator == "/") {
        if (divideZero(var2)){
            console.log("Tried to divide by zero")
            return undefined
        }
        var1 = divide(var1, var2)
    } else if (operator == "+") {
        var1 = add(var1, var2)
    } else if (operator == "-") {
        var1 = subtract(var1, var2)
    }
    // makes the next operate logic work properly
    operator = ""

    return var1
}


// option events

clrbtn.addEventListener("click", () => {
    clear()
})

addbtn.addEventListener("click", () => {
    operator = "+"
})
subbtn.addEventListener("click", () => {
    operator = "-"
})
multbtn.addEventListener("click", () => {
    operator = "*"
})
dividebtn.addEventListener("click", () => {
    operator = "/"
})
equals.addEventListener("click", () => {
    var1 = operate(var1, operator, var2)
    // zero division logic, else is the normal case, if var1 is undefined after solving then zero division occured
    if (var1 == undefined) {
        display.textContent = "tried to divide by zero"
        operator = ""
    } else {
        display.textContent = var1
        operator = "next"
    }
    var2 = undefined

    console.log(var1)
})


// returns num when corresponding button pressed
for (let i =0; i <= 9; i++) {
    const button = document.querySelectorAll(".num")
    button[i].value = i

    button[i].addEventListener("click", (e) => {

        // stops multiple zeros, and also makes sure we clear the zero divison error before input var1 again
        if (display.textContent == 0){
            display.textContent = ""
        } else if (display.textContent == "tried to divide by zero"){
            var1 = undefined
            clear()
        }

        // if not pushed keep updating var1
        if (!operatorPushed()){
            updateDisplay(button[i].value)
            var1 = parseInt(display.textContent)
            console.log(`var1: ${var1}`)
        }

        // if pushed update var2
        if (operatorPushed()){
            // only refreshes display fully if it just turned to var2
            if (display.textContent == var1){
                display.textContent = ""
            }
            updateDisplay(button[i].value)
            var2 = parseInt(display.textContent)
            console.log(`var2: ${var2}`)
        }
        
    })
}

// Get var 1


// push operator


//set var 2 since operator pushed


// evaluate function