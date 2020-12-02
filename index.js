const inquirer = require('inquirer');
const days = 2;

const choices = [];
for (let i = 1; i < days + 1; i++) {
    choices.push({ name: `Day ${i} part 1`, value: `day${i}pt1` });
    choices.push({ name: `Day ${i} part 2`, value: `day${i}pt2` });
}

(async () => {
    let choice = (await inquirer.prompt([{
        type: 'list',
        name: 'file',
        message: 'Please choose the AOC solution you would like to run.',
        choices
    }])).file;
    let solution;
    try{
        solution = require(`./${choice}`);
    } catch(e) {}
    if(!solution || typeof solution !== 'function') return console.error('Error loading solution!');
    solution();
})();