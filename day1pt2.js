const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(1);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input1.txt');
    input = input.split('\n');

    let result;
    input.forEach(o => {
        if (result) return;
        input.forEach(t => {
            let p = input.find(r => parseInt(o) + parseInt(t) + parseInt(r) === 2020);
            if (p) result = [o, t, p, o * t * p];
        });
    });
    if (result)
        console.log(`Found result ${result[0]} * ${result[1]} * ${result[2]} = ${result[3]}!`);
    else
        console.log('Didn\'t find result!');
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();