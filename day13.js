/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if (word[0]=== ":" && word[word.length - 1] === ":"){
        const emojiWord = word.slice(1,-1);
        if (emojis[emojiWord] !== undefined){
            return emojis[emojiWord]
        }
    }
    return word;
}

function emojifyPhrase(phrase){
    const words = phrase.split(" ");
    const emojifiedWords = words.map(emojifyWord);
    return emojifiedWords,join(" ");
}