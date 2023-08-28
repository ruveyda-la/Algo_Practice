// Sum To One Digit
// Implement a function ​sumToOne(num)​ that, given a number,
//  sums that number’s digits repeatedly until the sum is only one digit.
//   Return thatfinalonedigitresult.

function sumToOne(num) {
    if(num <= 9){
        return num
    }
    else {
        return (num%9)
    }
}
console.log(sumToOne(6))