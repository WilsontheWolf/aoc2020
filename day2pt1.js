const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(2);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input1.txt');
    input = input.split('\n');

    let result = 0;
    input.forEach(i => {
        let match = i.match(/(\d+)-(\d+) (\w): (\w+)/);
        if (!match) return console.error(`Input ${i} not valid!`);
        const [, o, t, l, p] = match;
        let finds = p.match(new RegExp(l, 'g'));
        if (!finds) return;
        if (finds.length >= o && finds.length <= t) result++;
    });
    console.log(`${result} passwords are valid.`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();