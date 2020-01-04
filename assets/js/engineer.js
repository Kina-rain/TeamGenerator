const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    get_role() {
        return "Engineer"
    }

    get_github() {
        return this.github
    }

}

module.exports = Engineer;