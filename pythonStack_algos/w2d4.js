

// UNSOLVED






/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var openbrace=[];
    var openbracket=[];
    var openparent=[];
    
    for(var i=0; i<str.length; i++){
       
        // check if there is an opening brace and push it into empty array
        if(str[i]==='{'){
            openbrace.push(str[i]);
        }
        if(str[i]==='['){
            openbracket.push(str[i]);
        }
        if(str[i]==='('){
            openparent.push(str[i]);
        }
         // check if there is closing brace without an open brace
        else if(str[i]==='}' && openbrace=== []){
            return false;
        }
        else if(str[i]===']' && openbracket===[]){
            return false;
        }
        else if(str[i]===')' && openparent===[]){
            return false;
        }
        // remove the pushed opening brace when the loop hits to a closing one.. so  the array is empty again 
        else if(str[i]==='}'){
            openbrace.pop();
        }
        else if(str[i]===']'){
            openbracket.pop();
        }
        else if(str[i]=== ')'){
            openparent.pop();
        }

    }
    // if any array still contains an opening brace then string is invalid
    if (openbrace!= [] || openbracket!=[] || openparent!=[]){
        return false;
    }
    // if it didn't return false till here so it's valid
    return true;
}

console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));