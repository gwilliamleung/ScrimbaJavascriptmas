/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function getRandomNumberOfTacos() {
    const numberOfTacos = Math.floor(Math.random()*10)+1;
    const tacos = new Array(numberOfTacos).fill('🌮')
    return [tacos]
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()