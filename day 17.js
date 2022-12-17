/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    let result = []
    for (let i =0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            for (let j =0; j < arr[i].length; j++){
                result.push(arr[i][j])
            }
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
