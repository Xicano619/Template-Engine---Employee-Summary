// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
     // Use constructor to present properties.
    constructor(name, id, email, officeNumber){
        /// create 'super' and include the properties of parent file.
        super(name, id, email);
        //    create variable storing the properties
        this.officeNumber = officeNumber;
    }
    
    // override so it returns "Manager"
    getRole(){
        // return ??
    }
}