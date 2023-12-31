/**
 * Have the function PowersofTwo(num) take the num parameter being passed which will be an
integer and return the string true if it's a power of two. If it's not return the string false. For
example if the input is 16 then your program should return the string true but if the input is 22
then the output should be the string false.
 */

const PowersOfTwo = (num) => {
  let answer;
  if (num % 2 === 0) {
      let div=num/2
      while (div >= 2) {
      if (div % 2 === 0) {
        div=div/2
        answer = true;
      } else {
        div=0
        answer = false;
      }
    }
  } else {
    return false;
  }
  return answer;
};

console.log(PowersOfTwo(100))