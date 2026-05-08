let firstLast6 = [1, 2, 6]
let arrFirstLast6 = firstLast6[firstLast6.length-1]
if(arrFirstLast6 === 6){
  console.log('true')
}else{
    console.log('false')
};
let secondFirstLast6 = [6, 1, 2, 3]
let arrSecondFirstLast6 = secondFirstLast6[0]
if(arrSecondFirstLast6 === 6){
console.log('true')
}else{
    console.log('false')
};

let thirdFirstLast6 = [13, 6, 1, 2, 3];
let arrthirdFirstLast6 = thirdFirstLast6[0];
if(arrthirdFirstLast6 === 6){
    console.log('true')
}else{
    console.log('false')
};


function forSameFirstLast(arrs){
        if(arrs.length >= 1 && arrs[0] === 1 && arrs[arrs.length-1] === 1){
            return true
        }else{
            return false
        }
}
console.log(forSameFirstLast([1,2,3]))

function sameSame(arr){
    let firstElement = arr[0];
    let lastElement = arr[arr.length-1];
    if(firstElement == lastElement && arr.length > 2){
        return true
    }else{
        return false;
    }
}
console.log(sameSame([5, 2, 3, 5]));


function sumOfNumbers(num){
    let total = 0;
    for(i=0; i<num.length; i++){
        total += num[i]
    }
    return total;
}
console.log(sumOfNumbers([5, 11, 2]))

