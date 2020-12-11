const { getInput } = require('./helper');
const day = 11;
const getAdj = (map, row, col, type) => {
    let adj = 0;
    let maxH = map.length - 1;
    let maxL = map[0].length - 1;
    [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ].forEach(o => {
        let done = false;
        let coord = [row, col];
        while (!done) {
            coord[0] += o[0];
            coord[1] += o[1];
            if (coord[0] < 0 || coord[0] > maxL || coord[1] < 0 || coord[0] > maxH) done = true;
            else {
                let value = map[coord[0]][coord[1]];
                if (value !== '.') {
                    done = true;
                    if (value === type) adj++;
                }
            }
        }
    });
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
                else if (v === '#' && getAdj(current, ri, i, '#') >= 5) {
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
