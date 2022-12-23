/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function displayTables(){
    const readyTables= getReadyTables();
    const tableHTML = readyTables.map(table => `<div class="table">${table} </div>`).join('');

    const tablesSection = document.querySelector('.tables');
    tablesSection.innerHTML = tableHTML;
}