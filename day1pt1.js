const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(1);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input1.txt');
    input = input.split('\n');

    let result;
    input.forEach(v => {
        if (result) return;
        let r = input.find(m => parseInt(v) + parseInt(m) === 2020);
        if (r) result = [v, r, v * r];
    });
    if (result)
        console.log(`Found result ${result[0]} * ${result[1]} = ${result[2]}!`);
    else
        console.error('Didn\'t find result!');
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();