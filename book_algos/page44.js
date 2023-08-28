// Create function ​clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00,
//  will print the angles (in degrees) of the hour, minute and second hands. 
// As a quick review, there are 360 degrees in a full arc rotation. 
// Treat “straight-up” 12:00:00 as 0 degrees for all hands.



function clockHandAngles(seconds){
    // define variables for the angles
    var hourA=0;
    var minuteA=0;
    var secondA=0;
    // check if the seconds are more than 12 hours in total
    if (seconds>=43200){
        seconds-=43200
    }

    hourA=360/12*(seconds/3600)
    seconds=seconds%3600
    minuteA=360/60*(seconds/60)
    seconds=seconds%60
    secondA=360/60*seconds
    
    console.log (hourA,minuteA,secondA)   
}
clockHandAngles(43200)