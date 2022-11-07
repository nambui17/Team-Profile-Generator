const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Member = require('../lib/Employee');

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
        const fileName = './dist/index.html';
        fs.writeFile(fileName, 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script defer src="../node_modules/@fortawesome/fontawesome-free/js/brands.js"></script>
    <script defer src="../node_modules/@fortawesome/fontawesome-free/js/solid.js"></script>
    <script defer src="../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js"></script>
    <title>My Team!</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class= "col-12 jumbotron mb-3" id="headerbox">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class = "container d-flex justify-content-between">
        <div class =  "row w-100 d-flex justify-content-around">`,
        (err) => err ? console.log(err) : {}
        );
    }

    async memberAdd(role) {
        if (role=='Engineer') {
            const engData = await inquirer
                .prompt(engQ)
                const newEngineer = new Engineer(engData.name,engData.id,engData.email,engData.gh);
                fs.appendFile('./dist/index.html',`
            <div class="card col-md-6 col-lg-3 col-sm-12-3 m-2 mb-5" style="width: 18rem;">
                <div class="h-20">
                    <h2 class="text-center text-danger">${newEngineer.name}</h2>
                    <div class="text-center text-secondary"><i class="fa-solid fa-laptop-code"></i> ${role}</div>
                </div>                        
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: <a href="mailto:${newEngineer.email}">${newEngineer.email}</a></li>
                    <li class="list-group-item">Employee ID: ${newEngineer.id}</li>
                    <li class="list-group-item">GitHub Profile: <a href=https://github.com/${newEngineer.gh}>${newEngineer.gh}</a></li>
                </ul>
            </div>`,
                (err) => err ? console.log(err) : {}
                );
                this.askNewMember();
        } else if (role == 'Intern') {
            const intData = await inquirer
                .prompt(intQ)
                const newIntern = new Intern(intData.name,intData.id,intData.email,intData.school);
                fs.appendFile('./dist/index.html', `
            <div class="card col-md-6 col-lg-3 col-sm-12 m-2 mb-5" style="width: 18rem;">
                <div class="h-20">
                    <h2 class="text-center text-danger">${newIntern.name}</h2>
                    <div class="text-center text-secondary"><i class="fa-solid fa-graduation-cap"></i> ${role}</div>
                </div>            
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
                    <li class="list-group-item">Employee ID: ${newIntern.id}</li>
                    <li class="list-group-item">School: ${newIntern.school}</li>
                </ul>
            </div>`,
                (err) => err ? console.log(err) : {}
                );
                this.askNewMember();
        } else if (role == 'Manager') {
            const manData = await inquirer
                .prompt(manQ)
                const newManager = new Manager(manData.name,manData.id,manData.email,manData.gh);
                fs.appendFile('./dist/index.html', `
            <div class="card col-md-6 col-lg-3 col-sm-12 m-2 mb-5" style="width: 18rem;">
                <div class="h-20">
                    <h2 class="text-center text-danger">${newManager.name}</h2>
                    <div class="text-center text-secondary"><i class="fa-solid fa-mug-saucer"></i> ${role}</div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: <a href="mailto:${newManager.email}">${newManager.email}</a></li>
                    <li class="list-group-item">Employee ID: ${newManager.id}</li>
                    <li class="list-group-item">Office Number: ${newManager.ofnum}</li>
                </ul>
            </div>`,
                (err) => err ? console.log(err) : {}
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
            // Finishes up the prompt and then executes the code after the prompt finishes.
            //This stops the this.endFile() from being executed every time
            if (moreMem.choice) {
                this.add();
            } else {
                this.endFile();
            }
    }

    endFile() {
        const fileName = './dist/index.html';
        fs.appendFile(fileName, `
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</body>
</html>`,
        (err) => err ? console.log(err) : console.log('Team Card Website Successfully Generated!')
        );
    };
}

module.exports = Generate;