/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

function toTitleCase(str){
    return str.split(' ').map(capitalizeWord).join(' ');
}

console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));