
// JUST BONUS IS UNSOLVED





/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
//  * @param {Array<number>} sortedNums
//  * @param {number} searchNum
//  * @returns {boolean} Whether the given num exists in the given array.
 */


// NON-RECURSIVE SOLUTION WITHOUT BONUS

function binarySearch(sortedNums, searchNum) {
    var leftIndex=0; 
    var rightIndex=sortedNums.length-1;
    while(leftIndex<=rightIndex){
      var middleIndex=Math.floor((leftIndex+rightIndex)/2)
      if (sortedNums[middleIndex] === searchNum){
            return middleIndex
        }
      else if(sortedNums[middleIndex]> searchNum){
        rightIndex=middleIndex-1
      }
      else {
        leftIndex=middleIndex+1
      } 
    }
return false
}


console.log(binarySearch(nums1,searchNum1))
console.log(binarySearch(nums2,searchNum2))
console.log(binarySearch(nums3,searchNum3))



// RECURSIVE SOLUTION WITHOUT BONUS

// if the array is empty, return false as the num cannot be found in the array
// if the array has elemnts, find the middle element in the array. if num is equal to the middle element, return middle element
// if target is less than the middle element, binary search left half of the array
// if target is greater than middle element, binary search the right half of the array

// function recursiveBinarySearch(sortedNums,searchNum){
//   return searchingNum(sortedNums, searchNum,0,(sortedNums.length-1))
// }
// function searchingNum(sortedNums,searchNum,leftIndex,rightIndex){
//   if(leftIndex>rightIndex){
//     return false
//   }
//   let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//   if (searchNum === sortedNums[middleIndex]){
//     return middleIndex 
//   }
//   if (searchNum<sortedNums[middleIndex]){
//     rightIndex = middleIndex-1;
//     return searchingNum(sortedNums,searchNum,leftIndex,rightIndex)
//   }
//   else {
//     leftIndex=middleIndex+1;
//     return searchingNum(sortedNums,searchNum,leftIndex,rightIndex)
//   }
  
// }

// console.log(recursiveBinarySearch(nums1,searchNum1))
// console.log(recursiveBinarySearch(nums2,searchNum2))
// console.log(recursiveBinarySearch(nums3,searchNum3))