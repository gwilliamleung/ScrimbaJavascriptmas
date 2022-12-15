/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function isPalindrome(str){
    for (let i = 0; i <str.length; i++){
        if (str[i] !== str[str.length - i -1 ]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
