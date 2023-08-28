
    
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr2d, value) {
    for(var i=0; i<arr2d.length; i++){
        for(var z=0; z<arr2d[i].length; z++){
            if (arr2d[i][z] == value){
                return true
            }
        }
    }
    return false
}
var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];
var value= 9
console.log(isPresent2d (arr2d, value));
