let highest = 30;
function above30(thirty){
    let result = []
    for(i=0; i<thirty.length; i++){
        if(thirty[i] >= highest){
            result.push(thirty[i])
        }
    }
    return result;
}
console.log(above30([20, 40, 50, 10, 30]))

const thirtyAndAbove30 = (arr) => {
    return arr.filter((num) => num >= 30).filter((num) => num > 40)
}
console.log(thirtyAndAbove30([20, 40, 50, 10, 30]));

let username = '              delight';
let usernameTrim = username.trim()
console.log(usernameTrim.length);
console.log(username.length);

const checkName = 'ri ce';

let nameWithoutSpace = checkName.replace(' ', '');
console.log(nameWithoutSpace.toUpperCase());

let outcome = nameWithoutSpace.includes('c');
console.log(outcome);

// function winnerBetweenVowelsAndAlphabet(winner){
//     let vowelCount = 0;
//     let consonantCount = 0;
//     let vowel = 'aeiouAEIOU';
//     for(i=0; i<winner.length; i++){
//         let charater = winner.charAt(i);

//         if(vowel.includes(charater)){
//             vowelCount++;
//         }else{
//             consonantCount++;
//         }
//     }
//     return {vowel: vowelCount, consonant: consonantCount};
// }

// console.log(winnerBetweenVowelsAndAlphabet('Delight'));

// function checkUpperandLowerCase(cas){
//   let upcase = 0;
//   let lowcase = 0;
//   let 
//   for(i=0; i<cas.length; i++){
//     if(cas[i] == cas.toUpperCase()){
//         upcase++;
//         return upcase;
//     }else{
//         lowcase++;
//         return lowcase;
//     }
//   }
//    let result = lowcase + upcase
//    return result;
// }
// console.log(checkUpperandLowerCase("EbuBBe"));


// function convertLowerToUpperCase(cas){
//     let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let convert
//     for(let i=0; i<cas.length; i++){
//         let chara = cas.charAt(i)
//         if(chara(i).includes(uppercase)){
//            convert = chara.lowerUpperCase()
//         }
//     }
//     return convert;
// }
// console.log(convertLowerToUpperCase('PRincess'))


function swapCase(str){
      let result = '';
      for(let i=0; i<str.length; i++){
        let chara = str.charAt(i);
        if(chara == chara.toUpperCase()){
            result += chara.toUpperCase();
        }else{
            result += chara.toLowerCase();
        }
      }
      return result;
}
console.log(swapCase('RuthErforD'))


// console.log(username.charAt(1));

// let modifiedUsername = username.split(" ")
// console.log(modifiedUsername);

// let modified2 = modifiedUsername.join(' ')
// console.log(modified2);

// function validUsername(){
//     let username = document.querySelector('#username').value;
//     let error = document.querySelector('.errorText');
//     if(username.length < 5){
//         error.textContent = "Username can not be less than 5 charater";
//     }else{
//         error.textContent = '';
//     }
// }

// let btn_button = document.querySelector('#btnSubmit');
// btn_button.addEventListener('click',() =>{

// validUsername();
// })

function swapCase(str){
    let result ="";
    for(let i=0; i<str.length; i++){
        let chara = str.charAt(i);
        if(chara ==chara.toUpperCase()){
           result+=chara.toLowerCase();
        }else{
            result+=chara.toUpperCase();
        }
    }

    return result;
}

console.log(swapCase("EbuBE"))