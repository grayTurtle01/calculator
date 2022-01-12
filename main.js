// clear button
let display = document.querySelector("#display")
document.querySelector("#clear").onclick = function(){
    display.value = '0'
}

// numbers buttons
let numbers = document.querySelectorAll('.number')
for( number of numbers){
    number.onclick = function(){
        let value = this.innerText
        if( display.value == '0')
            display.value = value
        else
            display.value += value
    }
}

// operations
// let result = 0;
// let input = 0;

document.querySelector('#equals').onclick = function(){
    check_last_operator()
    input_str = display.value
    result = eval(input_str)
   
    display.value = result
}


document.querySelector('#add').onclick = function(){
    check_last_operator()
    display.value += '+'
}

document.querySelector('#subtract').onclick = function(){
    check_last_operator_for_substract()
    display.value += '-'
}

document.querySelector('#multiply').onclick = function(){
    check_last_operator()
    display.value += '*'
}

document.querySelector('#divide').onclick = function(){
    check_last_operator()
    display.value += '/'
}
// Decimal Point
document.querySelector('#decimal').onclick = function(){
    if( display.value.slice(-1) != '.')
        display.value += '.'
}

function check_last_operator() {
    if( "+-*/".includes( display.value.slice(-1) )){
        display.value = display.value.slice(0,-1)
    }
}

function check_last_operator_for_substract() {
    if( "-".includes( display.value.slice(-1) )){
        display.value = display.value.slice(0,-1)
    }
}
