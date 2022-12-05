/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/
function whisper(sentence){
    let whispered = sentence.toLowerCase();
    if (whispered.endsWith("!")){
        whispered = whispered.slice(0,-1);
    }
    whispered = "shh... " + whispered
    return whispered;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));