const { getInput } = require('./helper');
const day = 6;

module.exports = async () => {
    let input = await getInput(day);
    if (!input) return console.error(`There was an issue getting the input. Please ensure you have a file called input${day}.txt`);
    input = input.split('\n\n');

    const total = input.reduce((total, questions) => {
        return total + 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((a, q) => 
            questions.split('\n').filter(b => b.includes(q)).length === questions.split('\n').length ? a + 1 : a
        , 0);
    }, 0);

    console.log(`The sum of the counts are ${total}!`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();