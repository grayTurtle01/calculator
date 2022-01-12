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
let result = 0;
let input = 0;

document.querySelector('#equals').onclick = function(){
    check_last_operator()
    input = display.value
    display.value = eval(input)
}


document.querySelector('#add').onclick = function(){
    check_last_operator()
    display.value += '+'
}

document.querySelector('#subtract').onclick = function(){
    check_last_operator()
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
    if( "+-*/".includes( display.value.slice(-1) ))
        display.value = display.value.slice(0,-1)
}