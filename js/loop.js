// for(let i= 1; i<= 1000; i++){
//     console.log(i +": I love you");
// }
// let sum = 0;
// for(let i=1; i<= 20; i++){
//     if(i % 2 ==1){
//         sum += i;
//     }
// }
// console.log("sum= "+sum);

// let total = 0;
// for(let a=1; a<= 100; a++){
//     if(a % 3==0 && a % 5==0){
//         total += a;
//     }
// }
// console.log('sum= ' +total);

// let sumNumber = 0;
// for(let b=1; b<=500; b++){
//     if(b % 5==0 && b % 9==0){
//       total += b;
//     }
// }
// console.log("The Sum= " +total)
// let i = 0;
// while(i<=10){
//     console.log(i + " This will work")
//     i++;
// }

// while(i<=100){
//     if(i % 2 == 1){
//         sum += i;
//     }
//     i++;
// }
// console.log('Sum= ' + sum);

// let y = 1;
// let amount = 0;
// while(y <= 50){
//     if( y % 2 == 0){
//         amount += y;
//     }
//     y++;
// }
// console.log("Total " + amount);

// let times = Number(prompt('enter the highest number'));
// let summ = 0;
// while(summ <= times){
//    let number = Number(prompt('enter any number less than ' + times));
//    summ += number;
// }
// alert("sum = " + summ)

// let input;
// while((input = prompt('type exit to stop')) !== 'exit'){
// }

let numberhw = [50, 30, 20, 100, 90, 10, 200]
let sumhw = 0;
let average = 0;
let t = 0
while(sumhw < 200 && t<numberhw.length){
  sumhw += numberhw[t];
  t++;
  average = sumhw / t++;
   if(average > 80){
    console.log('Excellent');
   }
}
console.log(sumhw)
console.log(average)

