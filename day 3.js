/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

const faveFoods = {
    breakfast: 'milk tea and toast',
    lunch: 'cheese baked chicken rice',
    supper: 'scrambled egg sandwich'
}

const { breakfast, lunch, supper } = faveFoods;
const mealsSection = document.getElementById('meals');
mealsSection.innerHTML = `For breakfast, I only like ${breakfast} 🍞. For lunch, I love ${lunch}
🍚, and for supper I want usuaally a ${supper} 🥪`