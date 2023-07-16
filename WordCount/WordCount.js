/**
 * Have the function WordCount(str) take the str string parameter being passed and return
the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return
6). Words will be separated by single spaces.
 */


const WordCount=(str)=>{
    const words=str.split(" ");
    return words.length;
}

console.log(WordCount("Never eat shredded wheat or cake"))