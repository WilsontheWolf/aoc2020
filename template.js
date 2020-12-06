const { getInput } = require('./helper');
const day = 0;

module.exports = async () => {
    let input = await getInput(day);
    if (!input) return console.error(`There was an issue getting the input. Please ensure you have a file called input${day}.txt`);
    input = input.split('\n');
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();