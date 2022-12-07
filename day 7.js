/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function altCaps(str){
    let newStr = "";
    for (let i=0; i <str.length; i++){
        if (i % 2 === 0){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));