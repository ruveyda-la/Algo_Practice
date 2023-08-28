// Last Digit of A to the B
// Implement a function that accepts two non-negative integers as arguments. Function ​lastDigitAtoB(a, b)​ 
// should return the last digit of the first number (a) raised to an exponent of the second number (b).
// Examples: given ​(3, 4)​, you should return ​1​ (the last digit of 81: 3 * 3 * 3 * 3).
//  Given ​(12, 5)​, return 2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).

function lastDigitAtoB(a,b){
    var mult = a%10
    for(var i=1; i<b ; i++){
        mult = (mult*a) % 10
    }
    return mult
}



console.log(lastDigitAtoB(3,4),"expected 1")
console.log(lastDigitAtoB(12,5),"expected 2")