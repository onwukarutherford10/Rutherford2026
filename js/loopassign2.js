let bill = 0;
let anoMove = true;
while(anoMove){
   let menu = Number(prompt('Welcome to Our Restaurant \n1. Order Food \n2. Add Drink\n3. View Total Bill\n4. Exit'));
    switch(menu){
        case 1:
            let orderFood = Number(prompt('Here Are The Avaliable Meals \n1. Rice - 1500 \n2. Burger - 2000 \n3. Pizza - 3000'));
            switch(orderFood){
                case 1:
                    let rice = 1500;
                    bill += rice;
                    alert('Your bill is: ' + bill);
                break;
                case 2:
                    let burger = 2000;
                    bill += burger;
                    alert('Your bill is: ' + bill);
                break;
                case 3:
                    let pizza = 3000;
                    bill += pizza;
                    alert('Your bill is: ' + bill);
                break;
                default:
                    alert('please input a valid value');
                break;
            }
        break;
        case 2:
            let addDrink = Number(prompt('Here are the drinks avaliable \n1. Water - 500 \n2. Soda - 800 \n3. juice - 1000'));
            switch(addDrink){
                case 1:
                    let water = 500;
                    bill += water;
                    alert('Your bill is: ' + bill);
                break;
                case 2:
                    let soda = 800;
                    bill += soda;
                    alert('Your bill is: ' + bill);
                break;
                case 3:
                    let juice = 1000;
                    bill += juice;
                    alert('Your bill is: ' + bill);
                break;
                default:
                    alert('please input a valid value');
                break;
            }
        break;
        case 3:
           alert('Your total bill is: ' + bill)
        break;
        case 4:
           anoMove = false;
           alert('Thanks for dining with us');
        break;
    }
    if(anoMove){
        let answer = prompt('Would you want to make another order? (yes/no)')
        if (answer === 'yes' || answer === 'YES' || answer === 'Yes'){
            anoMove = true;
        }else if(answer === 'no' || answer === 'No' || answer === "NO"){
            anoMove = false;
        }else{
            alert('invalid input, please try again')
            anoMove = false;
        }
        
    }
}