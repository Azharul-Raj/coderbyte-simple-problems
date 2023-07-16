/**
 * Have the function ExOh(str) take the str parameter being passed and return the
string true if there is an equal number of x's and o's, otherwise return the string false. Only
these two letters will be entered in the string, no punctuation or numbers. For example: if str is
"xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
 */

const ExOh=(str)=>{
    const Ex=/[x]/i
    const Oh=/[o]/i
    let ExCount=0
    let OhCount=0;
    for(let i=0;i<str.length;i++){
        if(str[i].match(Ex)){
            ExCount++
        }
        if(str[i].match(Oh)){
            OhCount++
        }
    }
    return ExCount===OhCount;
}

console.log(ExOh('xoxoxoooxx'))