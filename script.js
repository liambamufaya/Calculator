let op1;
let op2;
let operator;



function add(a,b){
    return a + b;
}

function subtract(a,b){
    return b - a;
}

function multiply(a,b){
    return a* b;
}

function divide(a,b ){
    return b / a;
}


const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

function operate(op1,op2,operand){
    operations[operand]?.(op1,op2);

}

const digit = document.querySelector("#digit")

const button = document.querySelector("#container")
button.addEventListener('click', (e)=>{
    if(e.target.classList.contains("btn")){
        digit.textContent += e.target.textContent 
    }
});


