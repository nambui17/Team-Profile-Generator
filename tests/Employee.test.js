const Employee = require('../lib/Employee');

describe('Manager class', ()=> {
    it('Should be an object with name, id, email', () => {
        const employ = new Employee('John Doe',123456,'jdoe@gmail.com');

        expect(employ.getName()).toBe('John Doe');
        expect(employ.getId()).toBe(123456);
        expect(employ.getEmail()).toBe('jdoe@gmail.com');
    });
    it('Should return an Employee as its role', () => {
        const employ = new Employee('John Doe',123456,'jdoe@gmail.com');

        expect(employ.getRole()).toBe('Employee');
    })
});