const Generate = require('./lib/Generate');
const fs = require('fs');

const gen = new Generate();

const init = new Promise((resolve,reject) => {
    if (gen.cont) {
        const mess = "Team Card Generator Sucessful";
        resolve(mess)
    } else {
        const issue = new Error('Team Card Generator encountered an error');
        reject(issue);
    }
});

function startFile() {
    const fileName = 'index.html';
    fs.writeFile(fileName, `<!DOCTYPE html>
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
    (err) => err ? console.log(err) : console.log('Team Card Generate Successfully Generated!')
    );
};

function endFile() {
    const fileName = 'index.html';
    fs.appendFile(fileName, `
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
    </html>`,
    (err) => err ? console.log(err) : console.log('Team Card Generate Successfully Generated!')
    );
};

init
    .then(startFile)
    .then(gen.add)
    .then(endFile)
    .catch((err) => console.error(err));