let balance = 1000;
let anoTrans = true;
while(anoTrans){
               let menu = Number(prompt('Welcome to ATM\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit'));
                switch(menu){
                    case 1:
                       let deposit = Number(prompt('How much do you want to deposit'));
                       balance += deposit;
                       alert('Your total balance is: ' +balance);
                    break;
                    case 2:
                       let withdraw = Number(prompt('How much do you want to withdraw'));
                       if(withdraw > balance){
                         alert(' Insufficient Funds');
                        }else{ 
                              balance -= withdraw;
                              alert('Your total balance: ' + balance);
                            } 
                        break;
                        case 3:
                            alert('Your current balance is: ' + balance);
                        break;
                        case 4:
                            anoTrans = false;
                            alert('Thank you for using ATM');
                        break;
                }
                if(anoTrans){
                    let input = prompt('Do you want to perform another Transaction?(yes/no)')
                    if(input === "yes" || input === 'Yes' || input === 'YES'){
                        anoTrans = true;
                    }else if(input === "no" || input === 'No' || input === 'NO'){
                        anoTrans = false;
                    }else{
                        alert('invalid input, please try again')
                        anoTrans = false;
                    }
                }
}
        
