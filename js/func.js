let userInfo = document.querySelector('#user-Info');
let output = document.querySelector('#output');
let greetings = (name, email)=>{
    userInfo.innerHTML = `Hello, ${name} you are welcome, we will contact you with ${email}`;
}

output.addEventListener('click', ()=>{
 let username = document.querySelector('#username') .value;
 let email = document.querySelector('#email').value;
 greetings(username, email);
}
)





let btnAns = document.querySelector('#btn_add');

function summary(a,b){
    return a + b;
}

btnAns.addEventListener("click", ()=>{
    let no1 = Number(document.querySelector('#number1') .value);
    let no2 = Number(document.querySelector('#number2') .value);
    let display = document.querySelector('.result')
    let myAns = summary(no1,no2);

    display.innerHTML = `${no1} + ${no2} = ${myAns}`

});

let calculation = document.querySelector('#calculate');
function calculate(a,operator,b){
    if(operator == "+"){
        return a + b;
    }else if(operator == "-"){
        return a - b;;
    }else if(operator == "/"){
        return a / b;
    }else if(operator == "x"){
        return a * b;
    }else{
        return 'No operator inputted';
    }
}

calculation.addEventListener('click', ()=>{
    let firstValue = Number(document.querySelector('#enter1').value);
    let secondValue = Number(document.querySelector('#enter2').value);
    let operator = document.querySelector('#main').value;
    let show = document.querySelector('#output');
    let answer = calculate(firstValue, operator, secondValue);
    show.innerHTML = `${firstValue} ${operator} ${secondValue} = ${answer}` 
})
