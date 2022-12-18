/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function candies(childern,candy){
    let candiesPerChild = Math.floor(candy / childern);
    return candiesPerChild * childern;
}

console.log(candies(3,10))