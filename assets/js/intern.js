const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    get_role() {
        return "Intern"
    }

    get_school() {
        return this.school
    }

}

module.exports = Intern;