/**
 * Have the function Superincreasing(arr) take the array of numbers stored in arr and
determine if the array forms a superincreasing sequence where each element in the array is
greater than the sum of all previous elements. The array will only consist of positive integers.
For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because
it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your
program should return the string "false
 */

// const Superincreasing=(arr)=>{
//     let   isSuperInc=true
//     for(let i=0;i<arr.length-1;i++){
//         const target=arr.pop();
//         const sum=arr.reduce((acc,curr)=>acc+curr);
//         if(sum>=target) {
//             isSuperInc=false
//         }
//     }
//     return isSuperInc
// }
const Superincreasing = (arr) => {
    let superInc = true;
    for (let i = 0; i < arr.length; i++) {
        const last = arr.pop();
        const sum = arr.reduce((acc, curr) => acc + curr, 0)
        if(sum>=last){
            superInc=false
        }
    }
    return superInc;
}
console.log(Superincreasing([1, 2, 3, 4]
))