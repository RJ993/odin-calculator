const firstNumber = ''
const operators = ['+', '-', 'x', '÷']
const secondNumber = ''

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a/b
}

function operate(firstNumber, secondNumber){
    if(operators.at(0)){
        add(firstNumber,secondNumber)
    }else if(operators.at(1)){
        subtract(firstNumber, secondNumber)
    }else if(operators.at(2)){
        multiply(firstNumber, secondNumber)
    }else if(operators.at(3)){
        divide(firstNumber, secondNumber)
    }
}