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
    input = display.value
    display.value = eval(input)
}


document.querySelector('#add').onclick = function(){
    display.value += '+'
}

document.querySelector('#subtract').onclick = function(){
    display.value += '-'
}

document.querySelector('#multiply').onclick = function(){
    display.value += '*'
}

document.querySelector('#divide').onclick = function(){
    display.value += '/'
}
// Decimal Point
document.querySelector('#decimal').onclick = function(){
    display.value += '.'
}