const fruits = ['mango', 'apple', 'orange', 'lemon'];

let num_of_fruits = fruits.length;
console.log(num_of_fruits);
// access array

let first_fruits = fruits[0];
let last_items = fruits[fruits.length-1];
console.log(first_fruits);

fruits.push('banana');
fruits.pop();
console.log(fruits);

// add to the beginning of the array
fruits.unshift('Cucumber');

// remove first
fruits.shift();

// add to middle or remove
fruits.splice(1,0, 'Grape');
fruits.splice(2,1);

fruits[2] = 'kiwi';
console.log(fruits)

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}



function sumEven(numbers){
  let sum = 0;
  for(i=0; i<numbers.length; i++){
    if(numbers[i] % 2 ==0){
        sum += numbers[i];
    }
  }
  return sum
}

console.log(sumEven([1,2,3,4,5]))

const target_Number = 50;
function sumAbove(fifth){
    let total = 0;
    for(i=0; i<fifth.length; i++){
        if(fifth[i] >= target_Number){
            total += fifth[i]
        }
    }
    return total;
}
console.log(sumAbove([6, 12, 50, 30, 10, 100]));

let highestTemp = 80;
function refinary(temperature){
    let summary = 0;
    let count = 0;
    for(i=0; i<temperature.length; i++){
        if(temperature[i] > highestTemp){
            summary += temperature[i];
            count++;
        }
    }
    let average = summary / count;
    return average;
}

console.log(refinary([30, 10, 90, 99, 20, 85]));

let array1 = [10, 20, 40]

let array2 = array1.splice()

let array3 = array1.splice(1,1)

console.log(array3)

let numbers = [1, 6, 3, 10]
console.log(numbers.includes(1));
console.log(numbers.includes(60));

for(let i=0; i<numbers.length; i++){
    if(numbers.includes(60)){
        // app
    }
}

let getIndex = numbers.indexOf(100) 
console.log(getIndex)

function duplicate(arr){
   let emptyBasket = []
   for(i=0; i<arr.length; i++){
    if(!emptyBasket.includes(arr[i])){
        emptyBasket.push(arr[i])
    }
   }
   return emptyBasket;
}
console.log(duplicate(['rice', 'beans', 'beans', 'garri']));

function getMax(arr){
    let maxSalary = arr[0];
    for(i=0; i<arr.length; i++){

        if(maxSalary < arr[i]){
            maxSalary = arr[i]
        }
    }
    return maxSalary;
}
console.log(getMax(30,20, 23, 100, 120, 20));

function getSum(arr1){
    let minSalary = arr1[0];
    for(i=0; i<arr.length; i++){

        if(maxSalary > arr1[i]){
            maxSalary = arr1[i]
        }
    }
    return minSalary;
}
console.log(getSum(30,20, 23, 100, 120, 20));

function getThreeHighPrice(arr){
  let result = arr.sort((a , b) => b-a);

  return result.slice(0 , 3)
}

let prices = [60, 100, 200, 180, 500, 20];
console.log(getThreeHighPrice(prices))

let targetArray = [1, 3, 5, 9];

function addIndexToGive3(){
    let arr = [1, 3, 5, 9]
    let pointer1 = arr[0]
    let pointer2 = arr[3]
    let target = 6;
    let indexNum;
    for(let pointer1 = [0]; pointer1 < arr.length; pointer1++){
      for(pointer2 =[3]; pointer2 >= arr.length; pointer2--){
           if(pointer1 + pointer2 === 6){
            indexNum = arr.indexOf(5)
           }
      }
    }
    return indexNum;
}
console.log(addIndexToGive3())
