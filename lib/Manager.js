const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email,ofnum) {
        super(name,id,email);
        this.ofnum=ofnum;
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;