const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(4);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input4.txt');
    input = input.split('\n\n').map(v => v.replace(/\n/g, ' '));

    const required = [
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid'
    ];
    let valid = 0;
    input.forEach(p => {
        let input = Array.from(p.matchAll(/(\w{3}):(\S+)/g)).map(v => v[1]);
        const missing = required.filter(r => !input.includes(r));
        if(!missing[0]) valid++;
    });

    console.log(`There are ${valid} valid passports!`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();