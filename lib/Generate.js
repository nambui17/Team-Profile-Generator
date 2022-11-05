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
    async add() {
        const role = await inquirer
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
            this.memberAdd(role.role);
    }

    start() {
        const fileName = 'index.html';
        fs.writeFileSync(fileName, `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <link rel="stylesheet" href="utils/css/style.css">
            <title>My Team!</title>
        </head>
        <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4">My Team!</h1>
        <p class="lead">All of my team members are here!</p>
        </div>
        </div>
        `,
        (err) => err ? console.log(err) : console.log('\n')
        );
    }

    async memberAdd(role) {
        if (role=='Engineer') {
            const engData = await inquirer
                .prompt(engQ)
                const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.gh);
                fs.appendFile('index.html', `<div class="card" style="width: 18rem;">
                <div class="card-header">
                ${newEngineer.name}
                ${role}
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Email: ${newEngineer.email}</li>
                        <li class="list-group-item">Employee ID: ${newEngineer.id}</li>
                        <li class="list-group-item">GitHub Profile: ${newEngineer.gh}</li>
                    </ul>
                </div>`,
                (err) => err ? console.log(err) : console.log('\n')
                );
                this.askNewMember();
        } else if (role == 'Intern') {
            const intData = await inquirer
                .prompt(intQ)
                const newIntern = new Intern(intData.name,intData.id,intData.email,intData.school);
                fs.appendFile('index.html', `<div class="card" style="width: 18rem;">
                <div class="card-header">
                ${newIntern.name}
                ${role}
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Email: ${newIntern.email}</li>
                        <li class="list-group-item">Employee ID: ${newIntern.id}</li>
                        <li class="list-group-item">School: ${newIntern.school}</li>
                    </ul>
                </div>`,
                (err) => err ? console.log(err) : console.log('\n')
                );
                this.askNewMember();
        } else if (role == 'Manager') {
            const manData = await inquirer
                .prompt(manQ)
                const newManager = new Manager(manData.name,manData.id,manData.email,manData.gh);
                fs.appendFile('index.html', `<div class="card" style="width: 18rem;">
                <div class="card-header">
                ${newManager.name}
                ${role}
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Email: ${newManager.email}</li>
                        <li class="list-group-item">Employee ID: ${newManager.id}</li>
                        <li class="list-group-item">Office Number: ${newManager.ofnum}</li>
                    </ul>
                </div>`,
                (err) => err ? console.log(err) : console.log('\n')
                );
                this.askNewMember();
        };
    }
    //ask for a new member addition to the team
    async askNewMember() {
        const moreMem = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    message: 'Add another team member?',
                    name: 'choice'
                }
            ])
            if (moreMem.choice) {
                this.add();
            } else {
                this.endFile();
            }
    }

    endFile() {
        const fileName = 'index.html';
        fs.appendFile(fileName, `
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        </body>
        </html>`,
        (err) => err ? console.log(err) : console.log('Team Card Website Successfully Generated!')
        );
    };
}

module.exports = Generate;