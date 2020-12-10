// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const { CustomConsole } = require("@jest/console");
const Employee = require("./Employee");

class Intern extends Employee {
     // Use constructor to present properties.
    constructor(name, id, email, school){
        // create 'super' and include the properties of parent file.
        super(name, id, email);
        //    create variable storing the properties
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    
    // override so it returns "Intern"
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern 