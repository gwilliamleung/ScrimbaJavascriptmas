/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

const dinnerFoods = ['🍝','🍔','🌮']
const menuSection = document.querySelector('section.menu');
const foodDivs = dinnerFoods.map(food =>{
    return `<div class="food">${food}</div>`;
})
const menuHTML = foodDivs.join('');
menuSection.innerHTML = menuHTML;