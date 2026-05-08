let age = 18;
let text = "Not old enough to drive";

if (age >= 18){
    text = "Old enough to drive";
}

let person = 16;
let country = "USA"
let write = "You can Not drive";

if (country == "USA"){
    if (person >= 16){
        write = "You can drive";
    }
}
let humanAge = 7;
let nationality = "Nigeria";
let say = "You Cannot See Shege";

if (nationality == "Nigeria" && humanAge >= 7){
    say = "You Can Now See Shege";
}

const hour = new Date().getHours();
let greetings;

if (hour < 18){
    greetings = "Good Day";
} else{
    greetings = "Good Evening";
}

let time = new Date().getHours();
let greeting;

if (time < 10){
    greeting = "Good Morning";
}else if (time < 20){
    greeting = "Good Day";
}else{
    greeting = "Good Evening";
}

let websiteMain;
if(Math.random() < 0.5){
   websiteMain = '<a href="https//w3schools.om">Visit W3schools</a>'
}else{
  websiteMain = '<a href="https//www.jw.org">Visit Our Website</a>'
}

let trophies = 41;
let club = (trophies < 40) ? "chelsea" : "Man United";

let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount);
