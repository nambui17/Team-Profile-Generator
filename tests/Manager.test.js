const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Manager class', ()=> {
    it('Should be an object with name, id, email consistent with member  items', () => {
        const man = new Manager('John Doe',123456,'jdoe@gmail.com',124);

        expect(man.getName()).toBe('John Doe');
        expect(man.getId()).toBe(123456);
        expect(man.getEmail()).toBe('jdoe@gmail.com');
    });
    it('Should ask for an office number in addition to member details', ()=> {
        const man = new Manager('John Doe',123456,'jdoe@gmail.com', 124);

        expect(man.ofnum).toBe(124);
    });
    it('Should return the role of manager when using the getRole method', () => {
        const man = new Manager('John Doe',123456,'jdoe@gmail.com', 124);

        expect(man.getRole()).toBe('Manager')
    })
});