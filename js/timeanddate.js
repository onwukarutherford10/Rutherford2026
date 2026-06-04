const current = new Date();
console.log(current.toDateString().split(' '))
console.log(current.toTimeString())
console.log(current.toLocaleString())
console.log(current.toLocaleDateString())
console.log(current.toLocaleTimeString())
let year = current.getFullYear();
console.log(year)
let day = current.getDay()
console.log(day)
let month = current.getMonth()
console.log(month + 1)
let minute = current.getMinutes()
console.log(minute)
let seconds = current.getSeconds()
console.log(seconds)
let dayOfTheMonth = current.getDate()
console.log(dayOfTheMonth)
let hours = current.getHours()
console.log(hours)

let fullTime = hours+":" + minute + ':' + seconds
console.log(fullTime)

function DayOfTheWeek(){
    let current = new Date()
    let day = current.getDay()
    if(day == 1){
        return 'It Monday bro, JavaScript is calling'
    }else if(day == 2){
        return 'It is Tuesday, time to sleep'
    }else if(day == 3){
        return 'My Guy, it is Wednesday, wed the next day'
    }else if(day == 4){
        return 'It is Thursday, What a free day'
    }else if(day == 5){
        return 'It is Friday, do not forget to play football'
    }else if(day == 6){
        return 'It is Saturday, time to watch football'
    }else if(day == 7){
        return 'Sunday bro!!!'
    }
}
console.log(DayOfTheWeek())

const futureDate = current.getDate() + 7;
// console.log(futureDate);

const start = new Date('2026-05-13');
const end = new Date('2026-05-20');

let difference = end - start;

let dayLeft = difference / (1000 * 60 * 60 * 24);
console.log(difference)
console.log(dayLeft)

function DaysLeft(userDate){
    let bday = new Date(userDate)
    let now = new Date().toISOString().split('T')[0]
    let total = bday - new Date(now)
    let diff = Math.floor(total / (1000 * 60 * 60 * 24));
    return diff
}
console.log(DaysLeft('2026-5-14'))

