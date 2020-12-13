const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");

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
        // write callback for render.
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        }
    })

    
}

function createManager(){
    inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    },
   ]).then((answers) => {
        const newManager = new Manager(answers.name,answers.id, answers.email,answers.officeNumber);
        teamMembers.push(newManager);
        createMember();
   });
}
function createMember(){
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "None"],
            name: "addEmployee",

        },

    ]).then((answers) => {
        if(answers.addEmployee === "Engineer"){
            console.log("*****engineer chosen");
            createEngineer();
        }else if (answers.addEmployee === "Intern") {
            console.log("***** intern chosen");
            createIntern();
        }else {
            fs.writeFileSync(OUTPUT_DIR + "/team.html", render(teamMembers), "utf8");
            
            
        }
        return;
    })
}

function createIntern (){
    
    inquirer.prompt([
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    },
    ]).then((answers) => {
        const newIntern = new Intern(answers.name,answers.id, answers.email,answers.officeNumber);
        teamMembers.push(newIntern);
        createMember();
   });

}

function createEngineer (){
    
    inquirer.prompt([
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "username"
    },
    ]).then((answers) => {
        const newEngineer = new Engineer(answers.name,answers.id, answers.email,answers.officeNumber);
        teamMembers.push(newEngineer);
        createMember();
   });

}
return main();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
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
