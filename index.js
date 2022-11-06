const Generate = require('./src/Generate');

const gen = new Generate();

async function create() {
    gen.start();
    await gen.memberAdd('Manager');
}

create();
