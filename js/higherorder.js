const fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach((fruit, numbers) => {
    console.log(numbers, fruit)
});

function colorLike(){
    const colors = ['Red', 'Blue', 'Green'];
    colors.forEach((color) => {
      console.log ('I like ' + color)
    }
)
}
console.log(colorLike())

const numbers = [5, 10, 15];
total = 0;
numbers.forEach((nums)=> {
total += nums;
console.log(total)
});

const foods = ['Rice', 'Beans', 'Yam'];
foods.forEach((food, num) => {
console.log(num , food)
});

function sumValue(numbers){
    return numbers.reduce((acc, price) => {
    return acc + price;
    }, 0)
}
console.log(sumValue([200, 150, 50, 100]))

function multiplyValue(number){
    return number.reduce((acc, num) => {
    return acc * num
    },1);
}
console.log(multiplyValue([2,3,5]))

function countTotal(words){
    return words.reduce((acc, num) => {
       return acc + num.length
    }, 0)
}
console.log(countTotal(['hi', 'hello', 'hey']))

const people = [
    {name: 'John', age: 30},
    { name: 'Mary', age: 25},
    {name: 'Mike', age: 30}
]
function grouped(){
 return people.reduce((acc, person) => {
    if(!acc[person.age]){
        acc[person.age] = []
    }
    acc[person.age].push(person.name)
    return acc
},{})
}
console.log(grouped())

function above18(numbers){
 return numbers.filter((numb) => {
 return numb >= 18
});
}
console.log(above18([20, 15, 10, 30, 18]))

function above10(numbers){
    let ten = 10
    return numbers.filter((numb) => {
    return numb > ten
    });
}
console.log(above10([5, 10, 15, 20, 3]))

function evenNumbers(numbers){
    return numbers.filter((num) => {
     return num % 2 === 0
    });
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6]))

function startWithLetterA(string){
    return string.filter((str) => {
     return str[0] === 'a'
    });
}
console.log(startWithLetterA(['apple', 'banana', 'avocado', 'grape', 'ant']))

const users = [
    {name: 'Mary', active: true},
    {name: 'Mike', active: false},
    {name: 'John', active: true}
]
function activeUsers(){
    return users.filter((user) => {
        return user.active === true
    })
}
console.log(activeUsers())

function removeUnwanted(words){
    return words.filter((word) => {
        return !word === null || !word === undefined
    });
}
console.log(removeUnwanted([1, null, 2, undefined, 3, null]))

function mixedcondition(arr){
    return arr.filter((num) => {
    return num % 3 === 0 && num > 10
    });
}
console.log(mixedcondition([3, 6, 9, 12, 15, 18, 20]))