/**
 * Have the function LongestWord(sen) take the sen parameter being passed and return the
largest word in the string. If there are two or more words that are the same length, return the
first word from the string with that length. Ignore punctuation and assume sen will not be
empty.
 */
const LongestWord=(str)=>{
    const words=str.replace(/[^\w\s]/g,"").split(" ");
    let longestWord=words[0]
    for(let i=0;i<words.length;i++){
        if(words[i].length>longestWord.length){
            longestWord=words[i]
        }
    }
    return longestWord;
}

console.log(LongestWord('Hi!! there**'))