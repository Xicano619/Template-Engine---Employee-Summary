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
        console.log(`Aua soy: ${this.name}`); 
    }

    getId(){
        console.log(`Your id number is: ${this.id}`);
    }
    getEmail(){
        console.log(`Email: ${this.email}`);
    }
    //Return 'Employee'
    getRole() {
        return Employee
    } 
    
}

module.export = Employee