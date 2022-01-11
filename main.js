// clear button
document.querySelector("#clear").onclick = function(){
    let display = document.querySelector("#display")
    display.value = '0'
}

// numbers buttons
let numbers = document.querySelectorAll('.number')
for( number of numbers){
    number.onclick = function(){
        let value = this.innerText
        document.querySelector('#display').value = value
    }
}