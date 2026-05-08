
function helloName(name){
     return 'Hello' + ' '+ name + '!'
}

// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

// Examples

// makeTags('i', 'Yay') → Yay
// makeTags('i', 'Hello') → Hello
// makeTags('cite', 'Yay') → Yay

function makeTags(a,b){
    return '<'+a+'>' + b + '</'+a+'>'
}
console.log(makeTags('i', 'Hello'))

// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

// Examples

// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab

function extraEnd(str){
    let newStr = str.slice(str.length-2, str.length)
    return newStr + newStr + newStr
}
console.log(extraEnd('Hello'))

// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab
function firstTwo(str){
    if(str.length > 2){
        let newStr = str.slice(0,2)
        return newStr
    }else{
        return str
    }
}

// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

// firstHalf('WooHoo') → WooHoo
// firstHalf('HelloThere') → HelloThere
// firstHalf('abcdefg') → abcdefg

function firstHalf(str){
   return str
}

// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

// function withoutEnd(str){
//     let newStr;
//     str.;
//     newStr = str;

//     return newStr
// }
// console.log(withoutEnd('Hello'))

// comboString('Hello', 'hi') → hiHellohi
// comboString('Hi', 'Hello') → HiHelloHi
// comboString('aaa', 'b') → baaab

function comboString(a,b){
    if(a.length > b.length){
        return b+a+b
    }else{
        return a+b+a
    }
}

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a,b){
    let firstA = a.shift()
    let firstB = b.shift
    return firstA+firstB
}
console.log(nonStart('shotl', 'java'))