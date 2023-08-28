/* 
    Given a string,
    return a new string with the duplicates excluded
    Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

// /**
//  * De-dupes the given string.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string that may contain duplicates.
//  * @returns {string} The given string with any duplicate characters removed.
//  */
function stringDedupe(str) {
    var newStr="";
    var freq={};
    // create a frequency table. But you don't need to count duplicating letters.
    for(var i=0; i<str.length; i++){
        if (!freq[str[i]]){
            freq[str[i]]=1;
        }
    }
    // add keys to the newstr
    for(let key in freq){
        newStr += key
    }
    return newStr
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));