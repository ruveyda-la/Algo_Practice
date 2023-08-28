const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

const strA4 ="123a";
const strB4 ="34Ba";
const expected4=false;


function caseInsensitiveStringCompare(strA, strB) {
    // first compare the lengths
    // use toUpperCase function
    if(strA.length != strB.length){
        return false
    }
    strA = strA.toUpperCase();
    strB = strB.toUpperCase();
    if(strA === strB){
        return true
    }
    else {
        return false
    }
}
console.log(caseInsensitiveStringCompare(strA1, strB1))
console.log(caseInsensitiveStringCompare(strA2, strB2))
console.log(caseInsensitiveStringCompare(strA3, strB3))
console.log(caseInsensitiveStringCompare(strA4, strB4))