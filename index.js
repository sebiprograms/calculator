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
    temp = var1
    var1 = temp * var2
}

function divide(var1, var2) {
    if (var2 == undefined){
        return var1 / var1
    }
    temp = var1
    var1 = temp / var2
}

function add(var1, var2) {
    if (var2 == undefined){
        return var1 + var1
    }
    temp = var1
    var1 = temp + var2
}

function subtract(var1,var2) {
    if (var2 == undefined){
        return var1 - var1
    }
    temp = var1
    var1 = temp - var2
}

// outputs text to calc display
function updateDisplay(input) {
    display.textContent += input
}

// Resets vars and display
function clear() {
    var1 = 0
    var2 = 0
    operator = ""
    display.textContent = ``
}
// returns boolean depending on if arthimetic operator has been selected
function operatorPushed() {
    if (operator === ""){
        return false
    } else {
        return true
    }
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

    display.textContent = var1
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
    operate(var1, operator, var2)
})


// returns num when corresponding button pressed
for (let i =0; i <= 9; i++) {
    const button = document.querySelectorAll(".num")
    button[i].value = i

    button[i].addEventListener("click", (e) => {

        // stops multiple zeros
        if (display.textContent == `0`){
            display.textContent = "0"
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