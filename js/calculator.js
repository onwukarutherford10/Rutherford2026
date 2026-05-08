function press(a){
    document.getElementById('mainInput') .value += a;
}
function sign(b){
    document.getElementById('mainInput') .value += b;
}

let equalTotal = document.querySelector('#equalBtn');
const majorInput = document.querySelector('#mainInput');

function allClear(){
     majorInput.value = '';
}

function calculate(){
    const display = majorInput.value;
    let operator;
    if(display.includes('+')){
        operator = '+';
    }else if(display.includes('-')){
        operator = '-';
    }else if(display.includes('/')){
        operator = '/'
    }else if(display.includes('*')){
        operator = '*'
    }
    let sides = display.split(operator);
    let a = Number(sides[0]);
    let b = Number(sides[1]);

    switch(operator){
        case '+':
            result = a + b;
        break;
        case '-':
            result = a - b;
        break;
        case '*':
            result = a * b;
        break;
        case '/':
            result = a / b;
        break;
        default:
            result = 'Error';
        break;
    }
    majorInput.value = result;
}

