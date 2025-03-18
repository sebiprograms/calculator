let var1 = 0
let var2 = 0
let operator = ""
const display = document.querySelector("#display")
const clrbtn = document.querySelector("#clear")
const addbtn = document.querySelector("#add")
const multbtn = document.querySelector("#multiply")
const subbtn = document.querySelector("#subtract")
const dividebtn = document.querySelector("#divide")
const equals = document.querySelector("#operate")
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
function updateDisplay(input) {
    display.textContent += `${input}`
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

clrbtn.addEventListener("click", () => {
    clear()
})

// returns num when corresponding button pressed
for (let i =0; i <= 9; i++) {
    const button = document.querySelectorAll(".num")
    button[i].value = i

    button[i].addEventListener("click", (e) => {
        if (display.textContent == ``){
            parseInt(display.textContent)
        }
        updateDisplay(button[i].value)
        if (operatorPushed){

        }
        
    })
}

// Get var 1


// push operator


//set var 2 since operator pushed


// evaluate function