

/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    for(var i = 0; i<queue.length; i++){
        if(queue[i]==1 && queue[i+1]!= undefined){
            let runner=i+1;
            let count=0;
            while(queue[runner] != 1 && queue[runner]!= undefined){
                count ++;
                runner++;
            }
            // console.log(`count is ${count}`);
            // console.log(`runner is ${runner}`);
            if (count<6 && queue[runner]!= undefined){
                return false;
            }
            // Make the count 0 so will start counting the next '0's between'1's.
            count=0
            // Go back by 1 index to hit the coming '1' in the array.
            i=runner-1
        }
        
    }
    return true;
}
console.log(socialDistancingEnforcer(queue1));
console.log(socialDistancingEnforcer(queue2));
console.log(socialDistancingEnforcer(queue3));
console.log(socialDistancingEnforcer(queue4));
