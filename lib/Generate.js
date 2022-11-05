const inquirer = require('../node_modules/inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Member = require('./Member');

const engQ = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'gh'
    }
];

const intQ = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school'
    }
];

const manQ = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the manager's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the manager's office number",
        name: 'office'
    }
];


class Generate {
    constructor() {
        this.cont = true;
    }
    //adds a new team member
    add() {
        inquirer
            .prompt([
                {
                    type: 'rawlist',
                    message: "Select the team member's role",
                    name: 'role',
                    choices: [
                        'Engineer',
                        'Intern'
                    ],
                    default: 0
                }
            ])
            .then((data) => {
                this.memberAdd(data.role);
                this.askNewMember();
            });
    }

    start() {
        this.memberAdd('Manager');
        this.askNewMember();
    }

    memberAdd() {
        switch(role) {
            case 'Engineer':
                return inquirer
                    .prompt(engQ)
                    .then((data)=>{
                        let newEngineer = new Engineer(data.name,data.email,data.id,data.gh)
                        fs.appendFile('index.html', `<div class="card" style="width: 18rem;">
                        <div class="card-header">
                        ${data.name}
                        ${role}
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Email: ${data.email}</li>
                          <li class="list-group-item">Employee ID: ${data.id}</li>
                          <li class="list-group-item">GitHub Profile: ${data.gh}</li>
                        </ul>
                      </div>`)
                    });
            case 'Intern':
                return inquirer
                    .prompt(intQ)
                    .then((data)=>{
                        let newIntern = new Intern(data.name,data.email,data.id,data.school)
                        fs.appendFile('index.html', `<div class="card" style="width: 18rem;">
                        <div class="card-header">
                        ${data.name}
                        ${role}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Email: ${data.email}</li>
                            <li class="list-group-item">Employee ID: ${data.id}</li>
                            <li class="list-group-item">GitHub Profile: ${data.school}</li>
                        </ul>
                       </div>`)
                });
            case 'Manager':
                return inquirer
                .prompt(manQ)
                .then((data)=>{
                    let newManager = new Manager(data.name,data.email,data.id,data.office)
                    fs.appendFile('index.html', `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                    ${newManager.name}
                    ${role}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Email: ${newManager.email}</li>
                        <li class="list-group-item">Employee ID: ${newManager.id}</li>
                        <li class="list-group-item">GitHub Profile: ${newManager.ofnum}</li>
                    </ul>
                   </div>`,
                   (err) => err ? console.log(err) : console.log('Team Card Generate Successfully Generated!')
                   );
            });
        }
    }
    //ask for a new member addition to the team
    askNewMember() {
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    message: 'Add another team member?',
                    name: 'choice'
                }
            ])
            .then(val => {
                if (val.choice) {
                    this.add();
                } else {
                    this.quit();
                }
            });
    }

    quit() {
        console.log("\nTeam Cards Generated!");
        process.exit(0);
    }
}

module.exports = Generate;