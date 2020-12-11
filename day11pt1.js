const { getInput } = require('./helper');
const day = 11;
const getAdj = (map, row, col, type) => {
    let adj = 0;
    if (map[row - 1]?.[col - 1] === type) adj++;
    if (map[row - 1]?.[col] === type) adj++;
    if (map[row - 1]?.[col + 1] === type) adj++;
    if (map[row]?.[col - 1] === type) adj++;
    if (map[row]?.[col + 1] === type) adj++;
    if (map[row + 1]?.[col - 1] === type) adj++;
    if (map[row + 1]?.[col] === type) adj++;
    if (map[row + 1]?.[col + 1] === type) adj++;
    return adj;
};

module.exports = async () => {
    let input = await getInput(day);
    if (!input) return console.error(`There was an issue getting the input. Please ensure you have a file called input${day}.txt`);
    input = input.split('\n')
        .map(v => v.split(''));
    let current = JSON.parse(JSON.stringify(input));
    let changes = 1;
    while (changes !== 0) {
        changes = 0;
        current = current.map((r, ri) =>
            r.map((v, i) => {
                if (v === 'L' && getAdj(current, ri, i, '#') === 0) {
                    changes++;
                    return '#';
                }
                else if (v === '#' && getAdj(current, ri, i, '#') >= 4) {
                    changes++;
                    return 'L';
                }
                else return v;
            }));
    }
    let f = current.map(r => r.join('')).join('\n').match(/#/g).length;
    console.log(`There are ${f} seats.`);

};
// run the code if called directly from the command line 
if (require.main === module)
    module.exports();
