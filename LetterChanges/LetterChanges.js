/**
 * Have the function LetterChanges(str) take the str parameter being passed and modify it
using the following algorithm. Replace every letter in the string with the letter following it in the
alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i,
o, u) and finally return this modified string.
 */

const LetterChanges = (str) => {
  const letters = str.split("");
  const newWord = [];
  const vowel = ["a", "e", "i", "o", "u"];
  const numbers=["1","2",'3',"4","5","6","7","8","9","0"]
  for (let i = 0; i < letters.length; i++) {
    if(numbers.includes(letters[i])){
        newWord.push(letters[i]);
        continue
    }
    let nextChar = String.fromCharCode(letters[i].charCodeAt(0) + 1);
    if (nextChar == "{") {
      nextChar = "a";
    }
    if (vowel.includes(nextChar)) {
      nextChar = nextChar.toUpperCase();
    }
    newWord.push(nextChar);
  }
  return newWord.join("");
};
console.log(LetterChanges("hello*3"));
