const fs = require('fs/promises');

module.exports.getInput = async (day) => {
    let output;
    try {
        output = (await fs.readFile(`./input${day}.txt`)).toString();
    } catch (e) { }
    return output;
};