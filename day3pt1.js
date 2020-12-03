const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(3);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input1.txt');
    input = input.split('\n');
    input = input.map(r => r.split(''));
    let x = 0;
    let y = 0;
    let width = input[0].length;
    let length = input.length;
    let trees = 0;
    for (; y < length; y++) {
        let current = input[y][x];
        if (current === '#') trees++;
        x += 3;
        if (x >= width) x -= width;
    }
    console.log(`I hit ${trees} trees.`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();