const Member = require('../lib/Member');

describe('Manager class', ()=> {
    it('Should be an object with name, id, email', () => {
        const mem = new Member('John Doe',123456,'jdoe@gmail.com');

        expect(mem.name).toBe('John Doe');
        expect(mem.id).toBe(123456);
        expect(mem.email).toBe('jdoe@gmail.com');
    });
});