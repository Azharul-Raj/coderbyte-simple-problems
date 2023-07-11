/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one space.
 */

const LetterCapitalize=(str)=>{
    const words=str.split(" ");
    const modifiedString=[]
    for (let i=0;i<words.length;i++){
        const capitalizeWord= words[i].charAt(0).toUpperCase()+words[i].slice(1)
        modifiedString.push(capitalizeWord)
    }
    return modifiedString.join(" ")
}
console.log(LetterCapitalize('hello world')) 