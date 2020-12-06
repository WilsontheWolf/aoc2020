const { getInput } = require('./helper');

module.exports = async () => {
    let input = await getInput(5);
    if (!input) return console.error('There was an issue getting the input. Please ensure you have a file called input5.txt');
    input = input.split('\n');
    const tickets = input.map((ticket) => {
        const row = [0, 127];
        const column = [0, 7];
        const rows = ticket.substring(0, 7).split('');
        const columns = ticket.substring(7).split('');
        rows.forEach((data) => {
            if (data === 'F') row[1] = Math.floor((row[1] + row[0]) / 2);
            else if (data === 'B') row[0] = Math.ceil((row[1] + row[0]) / 2);
            else console.error('Bad row input received in ticket', ticket);
        });
        if (row[0] !== row[1]) {
            console.error('Received invalid row on ticket', ticket, row);
        }
        columns.forEach((data) => {
            if (data === 'L') column[1] = Math.floor((column[1] + column[0]) / 2);
            else if (data === 'R') column[0] = Math.ceil((column[1] + column[0]) / 2);
            else console.error('Bad input column received in ticket', ticket);
        });
        if (column[0] !== column[1]) {
            console.error('Received invalid column on ticket', ticket, column);
        }
        return row[0] * 8 + column[0];
    }).sort((a, b) => a - b);
    let final;
    for (let i = tickets[0]; i < tickets[tickets.length - 1]; i++) {
        let index = tickets.findIndex((v) => v === i);
        if(index <0) final = i;
    }
    console.log(`Your seat id is ${final}!`);
};

// run the code if called directly from the command line 
if (require.main === module)
    module.exports();