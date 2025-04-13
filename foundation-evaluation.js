let firstNumber = null
const operators = ['+', '-', 'x', '÷']
let secondNumber = null
let result = null
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
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const multiplyButton = document.querySelector('#multiply')
const divideButton = document.querySelector('#divide')
const clearButton = document.querySelector('#clear')
const decimal = document.querySelector('#decimal')
const neg = document.querySelector('#negative')
const backspace = document.querySelector('#backspace')
const buttons = document.querySelectorAll('button')
let inputArray = []
let operationSelection = ''

function add(a, b){
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    if (b == 0){
        return 'UNDEFINED'
    }else{
        return a/b
    }
}

function operate(){
    reset()
    let newNumber = inputArray.reduce((wholeNumber, digit) => wholeNumber + digit, "")
    secondNumber = Number(newNumber)
    if(operationSelection === operators.at(0)){
        result = add(firstNumber, secondNumber)
        displayAnswer()
    }else if(operationSelection === operators.at(1)){
        result = subtract(firstNumber, secondNumber)
        displayAnswer()
    }else if(operationSelection === operators.at(2)){
        result = multiply(firstNumber, secondNumber)
        displayAnswer()
    }else if(operationSelection === operators.at(3)){
        result = divide(firstNumber, secondNumber)
        if (result == "UNDEFINED"){
            alert('UNDEFINED. Your calculator will be cleared.')
            clear()
        }else{
            displayAnswer()
        }
    }

    inputArray = []

    const equal = document.querySelector('#operate')
        equal.removeEventListener('click', operate)
}

function getFirstData(){
    if (result !== null){
        firstNumber = result
        inputArray = []
        result = null
    }else if (firstNumber !== null){
        operate()
    }else{
        let newNumber = inputArray.reduce((wholeNumber, digit) => wholeNumber + digit, "")
        firstNumber = Number(newNumber)
        inputArray = []
    }
}

function reset(){
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

function clear(){
    reset()
    firstNumber = null
    secondNumber = null
    result = null
    operationSelection = ''
    inputArray = []
}

function saveFirst(){
    getFirstData()
    const equal = document.querySelector('#operate')
        equal.addEventListener('click', operate)
}

function newCalc(){
    if (result !== null){
        clear()
    }
}

function displayAnswer(){
    if (result.toString().length <= 13 || result.toString().includes('.')){
        display.append(Math.round(result*100000000000)/100000000000)
    }else if (result.toString().length > 13){
        display.append(result.toExponential(1))
    }
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('press')
}

window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[key="${e.key}"]`)
    if(!key) return; // stops function from running
    key.click()
})

one.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('1')
    display.append('1')
    }
});
two.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('2')
    display.append('2')
    }
});
three.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('3')
    display.append('3')
    }
});
four.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('4')
    display.append('4')
    }
});
five.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('5')
    display.append('5')
    }
});
six.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('6')
    display.append('6')
    }
});
seven.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('7')
    display.append('7')
    }
});
eight.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('8')
    display.append('8')
    }
});
nine.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('9')
    display.append('9')
    }
});
zero.addEventListener('click', (e) => {
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13){
    newCalc()
    inputArray.push('0')
    display.append('0')
    }
});
decimal.addEventListener('click', (e) =>{
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize < 13 && !inputArray.includes('.')){
    newCalc()
    inputArray.push('.')
    display.append('.')
    }
})
neg.addEventListener('click', (e) =>{
    e.target.classList.add('press')
    let displaySize = inputArray.length
    if(displaySize > 0 && displaySize < 13 && !inputArray.includes('-')){
    newCalc()
    inputArray.unshift('-')
    display.insertAdjacentText("afterbegin", '-')
    }else if(inputArray.includes('-')){
        inputArray.shift('-')
        display.removeChild(display.firstChild)
    }
})
backspace.addEventListener('click', (e) => {
        e.target.classList.add('press')
        inputArray.pop()
        display.removeChild(display.lastChild)
})

addButton.addEventListener('click', (e) => {
    e.target.classList.add('press')
    reset()
    operationSelection = operators.at(0)
    saveFirst()
})
subtractButton.addEventListener('click', (e) => {
    e.target.classList.add('press')
    reset()
    operationSelection = operators.at(1)
    saveFirst()
})
multiplyButton.addEventListener('click', (e) => {
    e.target.classList.add('press')
    reset()
    operationSelection = operators.at(2)
    saveFirst()
})
divideButton.addEventListener('click', (e) => {
    e.target.classList.add('press')
    reset()
    operationSelection = operators.at(3)
    saveFirst()
})
clearButton.addEventListener('click', (e) => {
    e.target.classList.add('press')
    clear()
})

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))