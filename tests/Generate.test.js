const Generate = require('../src/Generate');
const fs = require('fs');

jest.mock('fs');


describe('Start', () => {
    it("Should call start a new html document with the html5 starting contents", ()=>{
        const gen = new Generate();
        gen.start();
        expect(fs.writeFile).toHaveBeenCalledTimes(1)
    })
})

describe('Ending File', () => {
    it("Should append the html document with the ending contents of the html file", ()=>{
        const gen = new Generate();
        gen.endFile();
        expect(fs.appendFile).toHaveBeenCalledTimes(1)
    })
})