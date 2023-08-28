// Fibonacci
// Implement the Fibonacci function, a famous mathematical equation that generates
//  a numerical sequence such that each number is the sum of the previous two. 
//  The Fibonacci numbers at index 0 and 1, coincidentally, have values of 0 and 1. 
//  Your function should accept an argument of which Fibonacci number.
// Examples: ​fibonacci(2)​ = 1, ​fibonacci(3)​ = 2, ​fibonacci(4)​ = 3, ​fibonacci(5)​ = 5, etc.
function fibonacci(x){
    var arr=[0,1]
    var y = 0;
    if(x<2){
        return arr[x]
    }
    else{
        for(var i=2; i<x+1 ;i++){
            var y =arr[i-1]+arr[i-2]
            arr.push(y)
        }
    }
    return arr[x]
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
