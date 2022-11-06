const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer class', ()=> {
    it('Should be an object with name, id, email consistent with member keys', () => {
        const eng = new Engineer('John Doe',123456,'jdoe@gmail.com','jdoe1234');

        expect(eng.getName()).toBe('John Doe');
        expect(eng.getId()).toBe(123456);
        expect(eng.getEmail()).toBe('jdoe@gmail.com');
    });
    it('Should ask for github username in addition to member details', ()=> {
        const eng = new Engineer('John Doe',123456,'jdoe@gmail.com','jdoe1234');

        expect(eng.getGithub()).toBe('jdoe1234');
    });
    it('Should return the role of Engineer when using the getRole method', () => {
        const eng = new Engineer('John Doe',123456,'jdoe@gmail.com','jdoe1234');

        expect(eng.getRole()).toBe('Engineer');
    })
});