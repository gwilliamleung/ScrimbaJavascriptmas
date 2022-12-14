/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function countVowelConsonant(str) {
    let score = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u'){
            score +=1;
        } else {
            score +=2;
        }
    }    
    return score
  }

console.log(countVowelConsonant("apple"));