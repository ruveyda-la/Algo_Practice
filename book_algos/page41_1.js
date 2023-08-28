// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive.
//  Roll a pair of these dice, tracking the statistics until doubles arerolled.
// Displaythe​numberofrolls​,​min,​ ​max,​ and ​average​.

function statisticsToDoubles(){
    var count = 0;
    var first = Math.ceil(Math.random()*6) ;
    var second = Math.ceil(Math.random()*6) ;
    var min = 12;
    var max = 2;
    
    while(first!=second){
        count ++
        first = Math.ceil(Math.random()*6);
        second = Math.ceil(Math.random()*6);
        var rollSum = first+second;
        // console.log("First is " +first)
        // console.log("Second is "+second)
        // console.log("Count is " +count)
        if(rollSum>max){
            max = rollSum
            // console.log("Max is " +max)
        }
        if(rollSum<min){
            min = rollSum
            // console.log("Min is "+min)
        }

    }
console.log (count,min,max) 
}
statisticsToDoubles()