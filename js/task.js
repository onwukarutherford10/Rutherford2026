function sumStr(nums){
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if( typeof nums[i] == 'string'){
          sum += Number(nums[i])
        }
    }
    return sum
}
console.log(sumStr([2, '6' , '5', 3, 20]))
