const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(3);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input1.txt');
    input = input.split('\n');
    input = input.map(r => r.split(''));
    let final = 1;
    [{
        right: 1,
        down: 1
    }, {
        right: 3,
        down: 1
    }, {
        right: 5,
        down: 1
    }, {
        right: 7,
        down: 1
    }, {
        right: 1,
        down: 2
    }].forEach(i => {
        let x = 0;
        let y = 0;
        let width = input[0].length;
        let length = input.length;
        let trees = 0;
        for (; y < length; y += i.down) {
            let current = input[y][x];
            if (current === '#') trees++;
            x += i.right;
            if (x >= width) x -= width;
        }
        final = final * trees;
    });

    console.log(`Final is ${final}.`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();