/**
 * Have the function ArithGeo(arr) take the array of numbers stored in arr and return the
string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it
follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An
arithmetic sequence is one where the difference between each of the numbers is consistent,
where as in a geometric sequence, each term after the first is multiplied by some constant or
common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative
numbers may be entered as parameters, 0 will not be entered, and no array will contain all the
same elements.
 */

const ArithGeo=(arr)=>{
    const diff=arr[2]-arr[1];
    const ratio=arr[2]/arr[1];
    let Arithmetic=false;
    let Geometric=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] -arr[i]===diff){
            Arithmetic=true
        }
        if(arr[i+1] /arr[i]===ratio){
            Geometric=true
        }
        if(!Arithmetic && !Geometric){
            break
        }
    }
    if(Arithmetic) return `Arihmetic`
    if(Geometric) return `Geometric`
    return -1;
}
console.log(ArithGeo( [2,4,16,24]
    ))