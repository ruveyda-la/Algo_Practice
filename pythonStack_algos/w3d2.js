/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
function encodeStr(str) {
    let newstr="";
    let obj = {};
    let len=0
    for(let i = 0; i<str.length; i++){
        if(str[i] in obj){
            obj[str[i]]+=1
        }
        else{
            obj[str[i]]=1
        }
    }
    for (keys in obj){
        newstr+=keys+obj[keys];
        len+=1
    }
    if(str.length>len*2){
        return newstr
    }
    else{
        return str
    }
}
console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))

