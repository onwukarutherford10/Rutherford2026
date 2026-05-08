function  message(){
    alert('you are stubborn, simple instruction, you can not obey');
}

function userName(){
    let uname = prompt('Enter your name')
    alert(uname + " " +  greet() +'!')
}
function greet(){
    return 'Welcome';
}

function addTwoNumber(a,b){
    return a + b;
}
console.log(addTwoNumber(10, 10));
console.log(addTwoNumber(20, 50));

function maths(a,b,c){
    let d = ((b*b) - (4 * a*c));
    let x1;
    let x2;

    if(d = 0){
        x1 = -b/2 * a;
        x2 = -b/2 * a;
    }else if(d > 0){
        x1 = (-b+Math.sqrt(d))/2 * a;
        x1 = (-b-Math.sqrt(d))/2 * a;
    }else{
        x1 = Math.abs((-b+Math.sqrt(d))/2 * a);
        x2 = Math.abs((-b-Math.sqrt(d))/2 * a);
    }
    console.log('X1= ' + x1 + " X2= " + x2);
}
maths(3, 6, 7)

function maths2(a,b,c){
    let discriminamt = (b * b) - (4 * a * c);
    let x1 = (- b + Math.sqrt(discriminamt)) / (2 * a);
    let x2 = (- b - Math.sqrt(discriminamt)) / (2 * a);

    console.log('X1= ' + x1 + ' X2= ' + x2);
}
maths2(1,5,6)

function maths3(a,b,c){
    let discriminamt = (b * b) - (4 * a * c);
    let x1 = (- b + Math.sqrt(discriminamt)) / (2 * a);
    let x2 = (- b - Math.sqrt(discriminamt)) / (2 * a);

    console.log('X1= ' + x1 + ' X2= ' + x2);
}
maths3(1,-3,-10)

function maths4(a,b,c){
    let right = (b * b) - (4 * a * c);
    let x1 = (- b + Math.sqrt(right)) / (2 * a);
    let x2 = (- b - Math.sqrt(right)) / (2 * a);

    console.log('X1= ' + x1 + ' X2= ' + x2);
}
maths4(2,4,-6)