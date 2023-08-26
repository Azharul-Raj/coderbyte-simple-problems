/**
 * Have the function OverlappingRanges(arr) take the array of numbers stored in arr which
will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2
also representing another range of integers (c to d), and a final 5th element (x) which will also
be a positive integer, and return the string true if both sets of ranges overlap by at least x
numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true.
The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5,
6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges:
4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return
the string false
 */

// const OverlappingRanges=(arr)=>{
//     let count=0
//     const a=arr[0]
//     const b=arr[1]
//     const c=arr[2]
//     const d=arr[3]
//     const range=arr[4]
//     const firstArr=[]
//     const secondArr=[]
//     for(let i=a;i<=b;i++){
//         firstArr.push(i)
//     }
//     for(let i=c;i<=d;i++){
//         secondArr.push(i)
//     }
//     for(let i=0;i<firstArr.length;i++){
//         for(let j=0;j<secondArr.length;j++){
//             if(firstArr[i]===secondArr[j]){
//                 count++
//             }
//         }
//     }
//     return count>=range?`true`:`false`
// }
const OverlappingRanges=(arr)=>{
    const target=arr.pop()
    const minUpperRange=Math.min(arr[1],arr[3])
    const maxLowerRange=Math.max(arr[0],arr[2]);
    const range=minUpperRange-maxLowerRange+1;
    return range>=target?`true`:`false`
}
console.log(OverlappingRanges([5,11,1,5,1]))