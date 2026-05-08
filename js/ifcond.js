let age = 18;
let text = 'You are not eligble to use this app';
if(age >= 18){
    text = "You are eligble to use this app";
}

let state = "Delta";
let driversLicense = true;
let letter ;
//if(driversLicense = false){
    //letter = "you can drive"
//}
if( state='Delta' && driversLicense){
    letter = "You can drive";
}else{
    letter = "You can not drive"
}
console.log(letter);

//let email = prompt("Enter Your Email Address");
//let password = prompt('Enter Your Password');

//if(email == "rashford10@gmail.com" && password == "12345"){
   // alert("congrat bro");
//}else{
   // alert("Invalid email or password")
//}
let traffic_light = "stop";


if(traffic_light == "stop"){
    console.log("Please Stop")
} else if(traffic_light == "blue"){
    console.log("Get Ready To Go")
}else if(traffic_light == "green"){
    console.log('Start moving')
}else{
    console.log("Unexecpted Happenned")
}

//let score = prompt("Enter Your Score");

// /if(score >= 70){
//     alert('You have A');
// }else if(score >=60){
//  alert('You have a B');
// }else if(score >= 50){
//      alert('You have a C');
// }else if(score >=40){
//      alert('You have a D');
// }else if(score >=0){
//      alert('You have an E');
// }else{
//      alert('Invalid Sorce');
// }

// let name = prompt("Enter Your Name");
// let friends = prompt('How many friends do you have');

// if(friends == 1){
//     alert("Hi" +name + '!, Thanks for answering our quiz. You have 1 friend');
// }else if(friends == 2){
//     alert("Hi "+name + '!, Thanks for answering our quiz. You have 2 friends');
// }else if(friends == 3){
//     alert("Hi "+name + '!, Thanks for answering our quiz. You have 3 friends');
// }else{
//     alert('You have many friends');
// }

// let date = prompt("Is it a weekend?(true/false)");
// let noCigar = prompt("Enter Number of Cigars");

// if( date == "true" && noCigar >= 40){
//     alert('The party will be successful');
// }else if( date == "false" && noCigar >= 40){
//     alert('The party will be successful');
// }else if( date == "false" && noCigar >=61){
//     alert('The party will not be successful');
// }else if(date == "true" && noCigar >=61){
//      alert('The party will be successful');
// }else{
//     alert('invalid');
// }
let day = Number(prompt("Enter the day of the weekend"));
let dayName;
switch(day){
    case 1:
    dayName = 'Sunday';
    break;
    case 2:
        dayName = "Monday";
    break;
        case 3:
            dayName = "Tuesday";
        break;
        case 4:
            dayName = "Wednesday";
            break;
            case 5:
            dayName = "Thursday";
            break;
            case 6:
            dayName = "Friday";
            break;
            case 7:
            dayName = "Saturday";
            break;
            default:
                dayName = "Invalid day"
}
alert("Today's day is " + dayName);

// let year = Number(prompt("Enter the year"));
// let month = Number(prompt("Enter the month"));
// let dayCount;

// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;

//         case 2:
//     if((year % 4===0 && !(year % 100 == 0)) || year % 400 == 0){
//         dayCount = 29;
//     }else {
//         dayCount = 28;
//     }
//     break;
//     default:
//         dayCount = -1
// }
// alert("it has a total of " + dayCount);