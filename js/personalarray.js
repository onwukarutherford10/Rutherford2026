let words = ['cat', 'elephant', 'dog', 'hippopotamus'];
words.sort((a,b) => b.length - a.length);
let longestWords = words.slice(0,2);
console.log(longestWords);

let names = ['john', 'alexander', 'mike', 'christopher'];
names.sort((low, high) => high.length - low.length);
let longestName = names.slice(0,3);
console.log(longestName);

let product = [
    {name: 'phone', price: 200},
    {name: 'laptop', price: 1000},
    {name: 'Tablet', price: 500}
];
product.sort((a,b) => b.price - a.price);
let twoMostExpensiveProduct = product.slice(0,2)
console.log(twoMostExpensiveProduct)

let fruits = ['apple', 'banana', 'grape']
fruits.sort((a,b) => a[a.length-1].localeCompare(b[b.length-1]));
let lastLetter = fruits.slice(0,3);
console.log(lastLetter);

let students = ['Ama', 'Divine', 'Rutherford', 'Chukwu', 'Adeyemi', 'Yusuf', 'Stella']
students.sort((a,b) => a.localeCompare(b))
// console.log(students)

let score = [30, 60, 40, 70, 75, 90, 50];
score.sort((a,b) => b-a)
// console.log(score)

function addStudentAndScore(){
    let result1 = students[0] + ' ' + score[0];
    let result2 = students[1] + ' ' + score[1];
    let result3 = students[2] + ' ' + score[2];
    let result4 = students[3] + ' ' + score[3];
    let result5 = students[4] + ' ' + score[4];
    let result6 = students[5] + ' ' + score[5];
    let result7 = students.length-1 + ' ' + score.length-1;

    const reportCardList = result1 + '\n' + result2 + '\n' + result3 + 
    '\n' + result4 + '\n' + result5 + '\n' + result6 + '\n' + result7
    return reportCardList
}
console.log(addStudentAndScore());

const studentobject =[
    {name: 'John', score: '50'},
    {name: 'Alice', score: '90'},
    {name: 'Bob', score: '70'}
];
studentobject.sort((a,b) => a.name.localeCompare(b.name));
const topTwoStudentObject = studentobject.slice(0,2)
console.log(topTwoStudentObject);

// FOR INCLUDES

const fruit = ['apple', 'banana', 'mango']
if(fruit.includes('banana')){
    console.log(1 + ': ' + 'yes')
}else{
    console.log(1 + ': ' + 'no')
}
const mangonum = fruit.indexOf('mango');
console.log(2 + ': ' + mangonum)
if(fruit.includes('orange')){
    console.log(3 + ': '+ 'Found')
}else{
    console.log(3 + ': ' + 'not found')
}

const numbers = [5, 10, 15, 20];
if(numbers.includes(15)){
    let fifteenIndexNum = numbers.indexOf(15);
    console.log(4 + ': ' + fifteenIndexNum);
}else(
    console.log(4 + ': ' + 'not found')
)

let name = ['Aman', 'John', 'Aman', 'Mike']
let amanFirstPosition = name.indexOf('Aman')
console.log(5 + ': ' + amanFirstPosition)

const flipCase = (letter) => {
    let result = '';
    for(i=0; i<letter.length; i++){
        let charaters = letter.charAt(i);
        if(charaters == charaters.toUpperCase()){
            result += charaters.toLowerCase();
        }else{
            result+= charaters.toUpperCase();
        }
    }
    return result;
}
console.log(flipCase('Hello123WORLD'));

function nameFormatter(name){
    let modifiedName = '';
    for(i=0; i<name.length; i++){
        let letter = name.charAt(i);
        if(name[0] === letter.toLowerCase()){
            modifiedName += letter[0].toUpperCase();
        }else{
             modifiedName += letter.toLowerCase();
        }
    }
    return modifiedName;
}
console.log(nameFormatter('aRu'))

const fullName = (name) =>{
    let fName = '';
    let text = name.split(' ')
    for(i=0; i<text.length; i++){
        let chara = text[i];
        if(chara == '') continue;
        fName += chara[0].toUpperCase() + chara.slice(1).toLowerCase() + " ";
    }
return fName.trim();
}
console.log(fullName('joHN doE onWuka  '))