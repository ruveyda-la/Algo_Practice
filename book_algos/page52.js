// PushFront
// Given an array and an additional value,
//  ​insert this value ​at the beginning of the array. 
//  Do this without using any built-in array methods.


// function pushFront(arr,val){
//     var newArr=[val]
    
//     for(var i=1; i<=arr.length;i++){
//         newArr.length ++
//         newArr[i]=arr[i-1]
//     }
//     return newArr
// }
// console.log(pushFront([1,2,3],8))


// InsertAt
// Given an array, index, and additional value, 
// ​insert the value into the array a​ t the given index. 
// Do this without using built-in array methods

// function InsertAt(arr,j,val){
//     var newArr=[]
//     for(var i=0;i<=arr.length;i++){
//         newArr.length ++
//         if(i<j){
//         newArr[i]=arr[i]
//         }
//         else if(i==j){
//             newArr[i]=val    
//         }
//         else{
//             newArr[i]=arr[i-1]
//         }
//     }
//     return newArr
// }
// console.log(InsertAt([1,2,3,4,5],1,8))


// function PopFront(arr){
//     var temp=arr[0];
//     for(var i=0;i<arr.length;i++){
//         if(i==arr.length-1){
//             arr[i]=temp
//         }
//         else{
//         arr[i]=arr[i+1]
//         }
//     }
//     return arr.pop()
// }   
// console.log(PopFront([1,2,3,4,5]))


// RemoveAt
// Given an array and an index into the array, remove and return the array value ​at that index.
//  Do this without using any built-in array methods except ​pop()​.
//   Think of ​PopFront(arr)​ as equivalent to ​RemoveAt(arr,0).​

// function RemoveAt(arr,val){
//     var temp=arr[val]
//     for(var i=val;i<arr.length;i++){
//         if(i==arr.length-1){
//             arr[i]=temp
//         }
//         else{
//         arr[i]=arr[i+1]
//         }
//     }
//     return arr.pop()
// }
// console.log(RemoveAt([1,2,3,4,5],3))