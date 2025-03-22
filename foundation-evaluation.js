let firstNumber = ''
const operators = ['+', '-', 'x', '÷']
let secondNumber = ''
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const display = document.querySelector('.display')

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

one.addEventListener('click', (e) => {
    display.append('1')
});
two.addEventListener('click', (e) => {
    display.append('2')
});
three.addEventListener('click', (e) => {
    display.append('3')
});
four.addEventListener('click', (e) => {
    display.append('4')
});
five.addEventListener('click', (e) => {
    display.append('5')
});
six.addEventListener('click', (e) => {
    display.append('6')
});
seven.addEventListener('click', (e) => {
    display.append('7')
});
eight.addEventListener('click', (e) => {
    display.append('8')
});
nine.addEventListener('click', (e) => {
    display.append('9')
});
zero.addEventListener('click', (e) => {
    display.append('0')
});