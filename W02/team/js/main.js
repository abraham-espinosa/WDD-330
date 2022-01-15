
function sendToDiv(){
    let inputValue = document.getElementById('txt1').value;
    document.getElementById('outputTxt1').innerHTML = inputValue;
}


function sum(){
    let maxValue = parseInt(document.getElementById('number2').value);
    let sum = 0;
    while(maxValue > 0){
        sum += maxValue
        maxValue -= 1
    }
    document.getElementById('outputNum2').innerHTML = sum;
}

function add(){
    let firstNum = parseInt(document.getElementById('number3-a').value);
    let secondNum = parseInt(document.getElementById('number3-b').value);
    document.getElementById('outputNum3').innerHTML = firstNum+secondNum;
}

//Arrow function - Multiplying
const multiply = () => {
    document.getElementById('outputNum4').innerHTML = parseFloat(document.getElementById('number4-a').value) * parseFloat(document.getElementById('number4-b').value);
}

//Function expression - Subtracting
const subtract = function (value1, value2) {
    document.getElementById('outputNum5').innerHTML = parseFloat(document.getElementById('number5-a').value) - parseFloat(document.getElementById('number5-b').value);
}