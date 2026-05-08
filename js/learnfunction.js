function toCel(fahrenheit) {
    return 5/9 * (fahrenheit-32);
}
let text = "The temperature is " + toCel(77) + " celsius";

function greetings(){
    return 'hello World';
}
function morning(){
   document.getElementById("ccc").innerHTML = 500; 
   return "you did great"
}
function multiply(a,b,c,d,e){
    return a + b + c + d + e;
}
let emeka = multiply(18, 15, 20, 12, 13);
 let rutherford = multiply(20, 15, 19, 10, 10)

let name = prompt('Enter Your Name');
let maths = Number(prompt('Enter Your Maths Score'));
let english = Number(prompt('Enter Your English Score'));
let civic = Number(prompt('Enter Your Civic Score'));
let biology = Number(prompt('Enter Your Biology Score'));
let chemistry = Number(prompt('Enter Your Chemistry Score'));
let totalscore = multiply(maths, english, civic, biology, chemistry);
alert(name + " Your score is " + totalscore);

function say(name){
    return "Greetings " + name;
}
let checking = say("Rutherfored");

// function profile(firstName, lastName){
//     return firstName + " Ama " + lastName;
// }
// let oneName = prompt('Enter Your First Name');
// let twoName = prompt('Enter Your Last Name');
// let fullName = profile(oneName, twoName);
// alert("Your fullname is " + fullName);

function account(me){
    return "Your name is " + me;
}
let mee = prompt('Enter Your name');
let assig = account(mee);
alert(assig);

function retur(a,b){
    return a * b;
}
let answer = retur(10, 10) * 10;

function undefi(a,b){
    let x = a * b;
}
let answer2 = undefi(5, 5);

let age = 18;
function year(age){
    if (age < 18){
        return "You are too young";
    }else {
        return "Access granted";
    }
}
let approval = year(age);

function findMax(){
  let max = -Infinity;
  for(i = 0; i < arguments.length; i++){
    if( arguments[i] > max){
        max = arguments[i]
    }
  }
  return max;
}
let b = findMax(4, 8, 6);

function findMin(){
    let min = Infinity;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > min){
            min = arguments[i];
        }
    }
    return min;
}

function allPut(a, b, c, d){
    let total = 0;
    for(i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total;
}
let c = allPut(100, 500, 200, 150);

function manualPut(a, b, c, d){
    return a + b + c + d;
}
let d = manualPut(100, 500, 200, 210);

function undefined1(a,b){
  if( b === undefined){
    b = 5;
  }
  return a * b
}
let e = undefined1(10);

function sum(...bola){
    let sum = 0;
    for( let ama of bola) sum += ama;
    return sum
}
let f = sum(40, 30, 20, 10 ,5 , 3, 2, 1);

const sayHello = function (){
    return "Greetings fam"
};
const say1 = function(e = 5, f = 5, g = 10){
    return e * f * g;
};