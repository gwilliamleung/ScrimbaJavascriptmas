/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function awardBonuses(){
    for (let i =1; i <= 100; i++){
        if (1 % 3 === 0 && i % 5 === 0){
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if (i % 3 === 0) {
            console.log(`${i} - Vacation!`);
        } else if (i % 5 === 0) {
            console.log(`${i} - $100,000 bonus!`);
        } else {
            console.log(`${i} - :(`);
        } 
    }
}

awardBonuses();