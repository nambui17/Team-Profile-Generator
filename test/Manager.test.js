const Manager = require('../lib/Manager');
const Member = require('../lib/Member');

describe('Manager class', ()=> {
    it('Should be an object with name, id, email consistent with member  items', () => {
        const man = new Manager('John Doe',123456,'jdoe@gmail.com',42);

        expect(man.name).toBe('John Doe');
        expect(man.id).toBe(123456);
        expect(man.email).toBe('jdoe@gmail.com');
    });
    it('Should ask for github username in addition to member details', ()=> {
        const man = new Engineer('John Doe',123456,'jdoe@gmail.com',42);

        expect(man.ofnum).toBe(42);
    });
});