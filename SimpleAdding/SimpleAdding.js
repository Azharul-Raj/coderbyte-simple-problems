/**
 * Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if
the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases,
the parameter num will be any number from 1 to 1000.
 */

const SimpleAdding=(num)=>{
    if(num>1000 || num<1) return`Only number from 1-1000 is allowed.`;
    let sum=0
    for(let i=0;i<=num;i++){
        sum+=i
    }
    return sum;
}

console.log(SimpleAdding(12));

