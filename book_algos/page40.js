// Generate Coin Change
// Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents,
//  and computes how to represent that amount with the smallest number of coins. 
//  Console.log the result.

function generateCoinChange(cents){
    var money = cents;
    var dollar = 0;
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    if(money>=100){
        dollar = Math.floor(money/100);
        money = money % 100;
    }
    if(money>=25){
        quarter = Math.floor(money/25);
        money = money% 25;
    }
    if(money>=10){
        dime = Math.floor(money/10);
        money = money%10;
    }
    if(money>=5){
        nickel = Math.floor(money/5);
        money = money%5;
    }
    if(money>=1){
        penny = money;
    }
    console.log(`${cents} cents can be broken down ${dollar} dollar, ${quarter} quarter, ${dime} dime, ${nickel} nickel, ${penny} penny.`)
    
}
generateCoinChange(388)