const Member = require('../lib/Member');

class Manager extends Member {
    constructor(name,id,email,ofnum) {
        super(name,id,email);
        this.ofnum=ofnum;
    }
}

module.exports = Manager;