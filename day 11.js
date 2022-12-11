/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

function reverseString(arr){
    return arr.split('').reverse().join('');    
}

function reverseStringsInArray(arr){
    let reversed = '';
    for (let i = str.length -1; i>=0; i--){
        reversed += arr[i]
    }
    return reversed
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
