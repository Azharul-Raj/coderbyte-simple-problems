/**
 * Have the function SwapCase(str) take the str parameter and swap the case of each
character. For example: if str is "Hello World" the output should be hELLO wORLD. Let
numbers and symbols stay the way they are.
 */

const SwapCase=(str)=>{
    const strArr=[]
    for(let i=0;i<str.length;i++){
        if(str[i] ===str[i].toLowerCase()){
            strArr.push(str[i].toUpperCase())
        }
        if(str[i] ===str[i].toUpperCase()){
            strArr.push(str[i].toLowerCase())
        }
    }
    return strArr.join("");
}
console.log(SwapCase('Hello World'))