/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function centuryFromYear(num) {
    return Math.floor(num /100) + (num % 100 === 0 ? 0 : 1);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1907));
console.log(centuryFromYear(100));
console.log(centuryFromYear(200));
