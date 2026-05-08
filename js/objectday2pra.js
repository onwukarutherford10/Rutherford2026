let user = {
    firstName: 'Rutherford',
    lastName: 'Onwuka',
    salary: 4000,
    email: 'thetechguy@gmail.com',
    password: 123456,
    depth: 3000,
    isActive : true,
    skills : ['HTML', '50% JavaScript', 'CSS'],
    role:{
        title: 'Engineer',
        level: 'Junior'
    },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}
user.takehome = function(amount){
    return this.salary += amount;
}

// user.gender = 'Male'
// delete user.gender
// console.log(user.takehome(300));
// console.log(Object.values(user)[0])
// console.log(Object.keys(user))

for(let key in user){
    console.log(key, ':', user[key])
}

const{email, password} = user;
console.log(`email: ${email}, password: ${password}`)

 
