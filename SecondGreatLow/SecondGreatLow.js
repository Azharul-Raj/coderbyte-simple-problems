/**
 * Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return
the second lowest and second greatest numbers, respectively, separated by a space. For
example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be
empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
 */

const SecondGreatLow=(arr)=>{
    if(!arr.length || arr.length<2){
   return`The array can't be empty and should contain at least 2 numbers.`
    }
    /**Array Set method removes duplication element from and array */
    const secondLow=[...new Set(arr)].sort((a,b)=>a-b)[1];    
    const secondGreat=[...new Set(arr)].sort((a,b)=>b-a)[1];    
    return `${secondLow} ${secondGreat}`
}

console.log(SecondGreatLow([1, 42, 42, 180]))