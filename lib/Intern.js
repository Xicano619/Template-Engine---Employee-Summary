// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const { CustomConsole } = require("@jest/console");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        console.log(`School(s) attended:  ${this.school}`)
    }
    
    // override so it returns "Intern"
    getRole(){
        // return ??
    }
}