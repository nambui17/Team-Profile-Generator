const Member = require('../lib/Member');

class Engineer extends Member {
    constructor(name,id,email,gh) {
        super(name,id,email);
        this.gh=gh;
    }
};

module.exports = Engineer;