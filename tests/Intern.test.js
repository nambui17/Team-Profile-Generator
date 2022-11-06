const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe('Manager class', ()=> {
    it('Should be an object with name, id, email consistent with member items', () => {
        const int = new Intern('John Doe',123456,'jdoe@gmail.com','University of Rock');

        expect(int.getName()).toBe('John Doe');
        expect(int.getId()).toBe(123456);
        expect(int.getEmail()).toBe('jdoe@gmail.com');
    });
    it('Should ask for school in addition to member details', ()=> {
        const int = new Intern('John Doe',123456,'jdoe@gmail.com','University of Rock');

        expect(int.getSchool()).toBe('University of Rock');
    });
    it('Should return the role of Intern when using the getRole method', () => {
        const int = new Intern('John Doe',123456,'jdoe@gmail.com','University of Rock');

        expect(int.getRole()).toBe('Intern');
    })
});