// arrConcat
// Replicate JavaScript’s ​concat()​. 
// Create a standalone function that accepts two arrays. 
// Return a ​new​ array containing the first array’s elements,
// followed by the second array’s elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] )​ should return ​['a','b',1,2]​.

function arrConcat(arr1,arr2){
    newArr=arr1;
    for(var i=0;i<arr2.length;i++){
        newArr.push(arr2[i])
    }
    return newArr
}
console.log(arrConcat(['a','b'], [1,2]))