const Engineer = require('../lib/Engineer');
const Member = require('../lib/Member');

describe('Engineer class', ()=> {
    it('Should be an object with name, id, email consistent with member keys', () => {
        const eng = new Engineer('John Doe',123456,'jdoe@gmail.com','jdoe1234');

        expect(eng.name).toBe('John Doe');
        expect(eng.id).toBe(123456);
        expect(eng.email).toBe('jdoe@gmail.com');
    });
    it('Should ask for github username in addition to member details', ()=> {
        const eng = new Engineer('John Doe',123456,'jdoe@gmail.com','jdoe1234');

        expect(eng.gh).toBe('jdoe1234');
    });
});