let str_formula = '';
let new_input = '';

// clear button
let display = document.querySelector("#display")
document.querySelector("#clear").onclick = function(){
    display.value = '0'
    str_formula = ''
    new_input = ''
}


// numbers buttons
let numbers = document.querySelectorAll('.number')
for( number of numbers){
    number.onclick = function(){
        let value = this.innerText

        if( display.value == '0'){
            display.value = value
            new_input = value
        }
        else{
            display.value += value
            new_input += value
        }        
    }
}

// operations


document.querySelector('#equals').onclick = function(){
    //check_last_operator()

    new_input = display.value
    str_formula += new_input
   
    result = eval(str_formula)
    str_formula = ''
   
    display.value = result
    new_input = result
}


document.querySelector('#add').onclick = function(){
    new_input = display.value
    display.value = ''
    
    str_formula += new_input 

    check_last_operator()
    str_formula += '+'
    new_input = ''
    

}

document.querySelector('#subtract').onclick = function(){
    display.value = ''
    
    str_formula += new_input 

    check_last_operator_for_substract()
    str_formula += '-'
    new_input = ''

    

}

document.querySelector('#multiply').onclick = function(){
    new_input = display.value
    display.value = ''
    
    str_formula += new_input 

    check_last_operator()
    str_formula += '*'
    new_input = ''

   
}

document.querySelector('#divide').onclick = function(){
    display.value = ''
    
    str_formula += new_input 

    check_last_operator()
    str_formula += '/'
    new_input = ''

   

}
// Decimal Point
document.querySelector('#decimal').onclick = function(){
    if( display.value.includes('.') == false){
        display.value += '.'
        new_input += '.'
    }
}

function check_last_operator() {

    while( "+-*/".includes( str_formula.slice(-1) ) ){
        str_formula = str_formula.slice(0,-1) 
    }

}

function check_last_operator_for_substract() {
    if( "-".includes( str_formula.slice(-1) )){
        str_formula = str_formula.slice(0,-1)
    }
}
