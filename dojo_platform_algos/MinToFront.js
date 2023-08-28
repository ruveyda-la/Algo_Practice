// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

function moveLowestToFront(arr) {
    let minIndex=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[minIndex]){
            minIndex=i
        }
    }
    const minVal = arr[minIndex];
    for(let i=minIndex;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=minVal;
    return arr;
}
const algo=moveLowestToFront([4,3,5,1,7,8,6])
console.log(algo)