const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
  function isPalindrome(str) {
    for(let i=0; i<str.length/2 ; i++){
        if(str[i] != str [str.length-1-i]){
            return false
        }
    return true    

    }

  }

  console.log(isPalindrome(str1))
  console.log(isPalindrome(str2))
  console.log(isPalindrome(str3))
  console.log(isPalindrome(str4))