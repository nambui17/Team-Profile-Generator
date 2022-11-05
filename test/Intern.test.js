const Intern = require('../lib/Intern');
const Member = require('../lib/Member');

describe('Manager class', ()=> {
    it('Should be an object with name, id, email consistent with member items', () => {
        const Int = new Intern('John Doe',123456,'jdoe@gmail.com','University of Rock');

        expect(Int.name).toBe('John Doe');
        expect(Int.id).toBe(123456);
        expect(Int.email).toBe('jdoe@gmail.com');
    });
    it('Should ask for github username in addition to member details', ()=> {
        const Int = new Intern('John Doe',123456,'jdoe@gmail.com','University of Rock');

        expect(Int.school).toBe('University of Rock');
    });
});