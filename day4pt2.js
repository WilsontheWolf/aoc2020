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
    const validation = {
        'byr': (input) => 1920 <= input && 2002 >= input,
        'iyr': (input) => 2010 <= input && 2020 >= input,
        'eyr': (input) => 2020 <= input && 2030 >= input,
        'hgt': (input) => {
            let match = input.match(/(\d+)(in|cm)/);
            if(!match) return false;
            const [, number, cmOrIn] = match;
            if (cmOrIn == 'cm') return 150 <= number && 193 >= number;
            if (cmOrIn == 'in') return 59 <= number && 76 >= number;
            return false;
        },
        'hcl': (input) => !!input.match(/^#[0-9,a-f]{6}$/),
        'ecl': (input) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(input),
        'pid': (input) => !!input.match(/^\d{9}$/),
        'cid': () => true
    };
    let valid = 0;
    input.forEach(p => {
        let input = Array.from(p.matchAll(/(\w{3}):(\S+)/g));
        let types = input.map(v => v[1]);
        const missing = required.filter(r => !types.includes(r));
        const invalid = input.filter((i) => {
            let type = i[1];
            return !validation[type](i[2]);
        });
        if (!missing[0] && !invalid[0]) valid++;
    });

    console.log(`There are ${valid} valid passports!`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();