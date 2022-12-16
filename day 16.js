/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function insertDashes(sentence){
    const words = sentence.split(' ')
    const dashedWords = words.map(word => {
        return word.split('').join('-')
    })
    return dashedWords.join(' ');
}

console.log(insertDashes('aba caba'))