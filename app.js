const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function main() {
    inquirer.prompt(
    {
        type: "list",
        message: "Which action would you like to take?",
        choices: ["Create manager", "Create intern", "Create engineer", "Create team"],
        name: "main"
    }).then(res =>{
        if(res.main === "Create manager"){
        // write callback for create manager.
        createManager();
        }else if(res.main === "Create intern"){
        createIntern();
        }else if(res.main === "Create engineer"){
        createEngineer();
        }else {
            
        }
    })

    
}

function createManager(){
    inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "manager"
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "manager"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "manager"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "manager"
    },
   ])
}

function createIntern (){
    
    inquirer.prompt([
    {
        type: "input",
        message: "What is the intern's name?",
        name: "intern"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "intern"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "intern"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "intern"
    },
    ])

}

function createEngineer (){
    
    inquirer.prompt([
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineer"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineer"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineer"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineer"
    },
    ])

}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function render(){
    
}
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
