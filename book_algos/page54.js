// Binary Search
// Given a sorted array and a value, return whether that value is present in the array.
// Do not sequentially iterate the entire array.
// Instead, ‘divide and conquer’, taking advantage of the fact that
// the array is sorted.


// function BinarySearch(arr,val){
//     var leftIndex=0
//     var rightIndex=arr.length-1
//     while(leftIndex<=rightIndex){
//         var midIndex=Math.floor((rightIndex+leftIndex)/2)
//         if(arr[midIndex] == val){
//             return true
//         }
//         else if(arr[midIndex]> val){
//             rightIndex=midIndex-1
        
//         }
//         else {
//             leftIndex=midIndex+1
//         }
//     }
//     return false
// }

// console.log(BinarySearch([1,2,3,4,5,6,7,8,9],7))
// console.log(BinarySearch([1,2,3,4,5,6,7,8,9],0))

// Rotate Array
// Implement ​rotateArr(arr, shiftBy)​ that accepts array and offset. 
// Shift arr’s values ​to the right​ by that amount.
// ‘Wrap-around’ any values that shift off array’s 
// end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1)​, change the array to [​ 3,1,2]​.

function rotateArr(arr,val){
    var temp=arr[arr.length-1]
    while (val>0){
        for(var i = arr.length-1; i>=0; i--){
            arr[i]=arr[i-1]
        }
        arr[0]=temp;
        temp=arr[arr.length-1];
        val--;
    }
    return arr
}

console.log(rotateArr([1,2,3,4,5,6,7,8],3),"expected",[6,7,8,1,2,3,4,5])