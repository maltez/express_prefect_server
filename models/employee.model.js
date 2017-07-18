const User = require('./user.model');

class Employee extends User {
    constructor() {
        super();

        this.position = '';
        this.experience = 0;
        this.salaryPerYear = 0;
    }
}

module.exports = Employee;
