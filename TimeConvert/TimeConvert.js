/**
 * Have the function TimeConvert(num) take the num parameter being passed and return the
number of hours and minutes the parameter converts to (ie. if num = 63 then the output should
be 1:3). Separate the number of hours and minutes with a colon.
 */

const TimeConvert=(num)=>{
    const hr=Math.floor(num/60);
    const min=num%60;
    return `${hr}:${min}`
}

console.log(TimeConvert(26))