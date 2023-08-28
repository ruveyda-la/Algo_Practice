// Nth-Largest
// Given an array, return the Nth-largest element: there should be (N - 1) elements that are larger.

function NthLargest(arr,n){
    if (arr.length< n){
        return `Length of the ${arr} should be more than ${n}`
    }
    var pivot = arr[Math.floor(arr.length/2)]; 
    var left = [];
    var mid = [];
    var right = [];
    for (var i = 0;i<arr.length; i++){
        if (arr[i]< pivot){
            right.push(arr[i])
        }
        if (arr[i] == pivot){
            mid.push(arr[i])
        }
        else if(arr[i]> pivot) {
            left.push(arr[i])
        }
    }
    
    var leftMid = left.length + mid.length
    if (n<=left.length){
        return NthLargest(left,n)
    }
    if(n>leftMid){
        return NthLargest(right,n-leftMid)
    }
    else {
        return mid[0]
    }    
}
console.log(NthLargest([9,1,3,2,7,4,4,7,7,6,5,8],3))