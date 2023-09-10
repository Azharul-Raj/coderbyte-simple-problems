/**
 * Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 */
/**
 * Constraints:
    arr is a valid JSON array
    2 <= JSON.stringify(arr).length <= 105
    1 <= size <= arr.length + 1
 */

const chunkArray = (arr, size) => {
    const final = [];
    let endPart = size
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, endPart)
        final.push(chunk);
        endPart += size
    }
    return final;
}
console.log(chunkArray([8, 5, 3, 2, 6], 0))