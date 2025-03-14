let var1 = 0
let var2 = 0
let operator = "+"

function operate(var1, operator, var2) {
    if (operator == "*") {
        multiplay(var1, var2)
    } else if (operator == "/") {
        divide(var1, var2)
    } else if (operator == "+") {
        add(var1, var2)
    } else if (operator == "-") {
        subtract(var1, var2)
    }
}

console.log()