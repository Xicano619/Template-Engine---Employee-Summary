// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
     // Use constructor to present properties.
    constructor(name, id, email, github){
        // create 'super' and include the properties of parent file.
        super(name, id, email);
        //    create variable storing the properties
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    // override so it returns "engineer"
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;