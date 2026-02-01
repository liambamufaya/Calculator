// Storing the first and second and the operator
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let result = null;
let shouldResetScreen = false;

// Mathematical operations
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a* b;
}

function divide(a,b ){
    if (b === 0) return "Error";
    return a / b;
}

//Getting the function based on the operator

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

function operate(a,b,operand){
  return operations[operand]?.(a,b);
}


// Variable storing text on screen
const screen = document.querySelector("#screen");
const container = document.querySelector("#container");

container.addEventListener('click', (e)=>{
    const target = e.target;

    
    // Clear the screen when C button ic clicked
    if (target.classList.contains("clear")){
        screen.textContent = "";
        firstNumber = null;
        secondNumber = null;
        currentOperator = null;
        result = null;

    }

     // Show clicked buttons
    if(target.classList.contains("number")){
        if(shouldResetScreen) {
            screen.textContent = "";
            shouldResetScreen = false;

        }
        screen.textContent += target.textContent        
    }
        
    // When operator is pressed
    if (target.classList.contains("operator")){

        if (screen.textContent === "") return;

        if (firstNumber === null && currentOperator === null){
            firstNumber= Number(screen.textContent)
            currentOperator = target.textContent;
            screen.textContent = "";
            shouldResetScreen = true;
        }
        else {
            secondNumber= Number(screen.textContent);
            screen.textContent = "";
            result = operate(firstNumber,secondNumber,currentOperator)
            currentOperator = e.target.textContent
            firstNumber = result;
            screen.textContent = firstNumber;
            shouldResetScreen = true;
           
        }
    }
    

        // When equal sign is pressed
        if (target.classList.contains("equal")){
            if (currentOperator === null || screen.textContent === "") return;
            secondNumber =  Number(screen.textContent);
            result =  operate(firstNumber,secondNumber,currentOperator);
            
            screen.textContent = result;
            firstNumber = result;
            currentOperator = null;
            shouldResetScreen = true;

        }
});