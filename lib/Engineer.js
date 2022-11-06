const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email,gh) {
        super(name,id,email);
        this.gh=gh;
    }
    getGithub() {
        return this.gh
    }

    getRole() {
        return 'Engineer'
    }
};

module.exports = Engineer;