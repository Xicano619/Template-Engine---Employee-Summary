// TODO: Write code to define and export the Employee class
class Employee {
    // Use constructor to present properties.
    constructor(name, id, email) {
    //    create variable storing the properties.
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name; 
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    //Return 'Employee'
    getRole() {
        return 'Employee';
    } 
    
}

module.exports = Employee