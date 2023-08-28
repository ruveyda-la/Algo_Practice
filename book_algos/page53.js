// Reverse Array
// Given a numerical array, reverse the order of the values.
//  The reversed array should have the same length, 
//  with existing elements moved to other indices so that
//   the order of elements is reversed.


// var x =[1,2,3,4,5,6,7]

// function ReverseArray(arr){
//     newArr=[];
//     for(var i=arr.length-1 ;i>=0 ; i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(ReverseArray(x))



// Skyline Heights
// You are given an array with heights of consecutive buildings in the city.
// For example, ​[-1,7,3]​ would represent three buildings: first is actually below street level, 
// second is seven stories high, and third is three stories high (but hidden behind the seven-story onbe). 
// You are situated at street level. 
// Return an array containing heights of the buildings you can see, in order. 


// function SkylineHeights(arr){
//     var max=arr[0]
//     var newArr=[max]
//     for(var i=1;i<arr.length;i++){
//         if (arr[i]>max){
//             max=arr[i]
//             newArr.push(max)
//         }
//     }
//     return newArr
// }

// x=[1,-1,7,3]
// y=[-1,7,3,8]
// console.log(SkylineHeights(x),"expected [1,7]")
// console.log(SkylineHeights(y),"expected [-1,7,8]")