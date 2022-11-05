const Member = require('../lib/Member');

class Intern extends Member {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school=school;
    }
}

module.exports = Intern;