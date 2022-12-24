/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/
const player = document.getElementById("player");

function playSong(id){
    player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
}