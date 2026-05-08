let totalAmount = 0;
let conShop = true;
while(conShop === true){
    menu = Number(prompt('Welcome to our Supermarket, happy shopping \n1. Buy Groceries \n2. Buy Snacks \n3. View Total Amount \n4. Exit'))
    switch(menu){
        case 1:
            let say = 'You ordered '
            let groceries = Number(prompt('Avalible Groceries!! \n1. Rice - 2500 \n2. Garri - 2000 \n3. Beans - 1500'))
            switch(groceries){
                case 1:
                    let rice = 2500;
                    totalAmount += rice;
                    let riceText = 'Rice for 2500.'
                    say += riceText
                    alert(say + '\nYour bill is: ' + totalAmount);
                break;
                case 2:
                    let garri = 2000;
                    totalAmount += garri;
                    let garriText = 'Garri for 2000.'
                    say += garriText
                    alert(say + '\nYour bill is: ' + totalAmount );
                break;
                case 3:
                    let beans = 1500;
                    totalAmount += beans;
                    let beansText = 'Beans for 1500.'
                    say += beansText
                    alert(say + '\nYour bill is: ' + totalAmount);
                break;
                default:
                    alert('Invalid input')
                    let retry = true;
                    while(retry = true){
                        retry = prompt('Do you want to try again? (yes/no)')
                        if(retry === 'yes' || retry === 'Yes' || retry === 'YES'){
                            groceries = true;
                        }else if(retry === 'no' || retry === 'No' || retry === 'NO'){
                            groceries = false;
                        }else{
                            alert('invalid input');
                            
                        }
                    }
                break;
            }
        break;
        case 2:
            let saySnack = 'You ordered '
            let snacks = Number(prompt('Avalible Snacks!! \n1. Biscuit - 500 \n2. Chocolate - 700 \n3. Chips - 1000'))
            switch(snacks){
                case 1:
                    let biscuit = 500;
                    totalAmount += biscuit;
                    let biscuitText = 'Biscuit for 500.'
                    saySnack += biscuitText
                    alert(saySnack + '\nYour bill is: ' + totalAmount);
                break;
                case 2:
                    let chocolate = 700;
                    totalAmount += chocolate;
                    let chocolateText = 'Chocolate for 700.'
                    saySnack += chocolateText
                    alert(saySnack + '\nYour bill is: ' + totalAmount );
                break;
                case 3:
                    let chips = 1000;
                    totalAmount += chips;
                    let chipsText = 'Chips for 1000.'
                    saySnack += chipsText
                    alert(saySnack + '\nYour bill is: ' + totalAmount);
                break;
            }
    }
}