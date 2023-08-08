/**
 * Have the function OtherProducts(arr) take the array of numbers stored in arr and return a
new list of the products of all the other numbers in the array for each element. For example:
if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of
all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this
answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new
array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array
will contain at most 10 elements and at least 1 element of only positive integers.
 */

const OtherProducts=(arr)=>{
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        const otherArr=arr.slice(0,i).concat(arr.slice(i+1))
        newArr.push(otherArr.reduce((acc,curr)=>acc*curr))
    }
    return newArr.join("-")
}

//Alternative solution
// const OtherProducts=(arr)=>{
//     const newArr=[];
//     for (let i=0;i<arr.length;i++){
//         let number=1
//         for(let j=0;j<arr.length;j++){
//             if(i!==j){
//                 number*=arr[j]
//             }
//         }
//         newArr.push(number)
//     }
//     return newArr.join("-")
// }

console.log(OtherProducts([1, 2, 3, 4, 5]))