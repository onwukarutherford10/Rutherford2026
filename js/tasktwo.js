function canBalance(arr){
    let newArr = []
    if(arr.length % 2 === 0){
        let evenMid = arr.length/2
        let evenSide1 = arr.slice(0, evenMid)
        let evenSide2 = arr.slice(evenMid, arr.length)
        let sumEvenSide1 = 0;
        let sumEvenSide2 = 0
        for(let i=0; i<evenSide1; i++){
           sumEvenSide1 += evenSide1[i]
        }
        for(let i=0; i<evenSide2; i++){
           sumEvenSide2 += evenSide2[i]
        }
        if(sumEvenSide1 === sumEvenSide2){
            newArr.push(evenSide1.length)
            newArr.push(evenSide2.length)
            return newArr
        }else if(sumEvenSide1 !== sumEvenSide2){
            return -1
        }
    }else if (arr.length === 2){
        let evenMid = arr.length/2
        let evenSide1 = arr.slice(0, evenMid)
        let evenSide2 = arr.slice(evenMid, arr.length)
        if(evenSide1 === evenSide2){
            newArr.push(evenSide1.length)
            newArr.push(evenSide2.length)
            return newArr
        }
    }else if(arr.length % 2 === 1){
        let mid = Math.floor(arr.length/2+1)
        let side1 = arr.slice(0, mid)
        let side2 = arr.slice(mid, arr.length)
        let sumSide1 = 0;
        let sumSide2 = 0;
    for(let i=0; i<side1.length; i++){
        sumSide1 += side1[i]
    }
    for(let i=0; i<side2.length; i++){
        sumSide2 += side2[i]
    }
    if(sumSide1 === sumSide2){
        newArr.push(side1.length)
        newArr.push(side2.length)
        return newArr
    }else{
        return -1
    }
    }
    
}
console.log(canBalance([10, 10, 10, 10]))