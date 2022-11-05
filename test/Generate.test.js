const Generate = require('../lib/Generate');
const fs = require('fs');

jest.mock('fs');
jest.mock('../lib/Generate');

describe('start', () => {
    it("should call start a new html document with the html5 starting contents", ()=>{
        const gen = new Generate();
        const path = "index.html";
        const text = `<!DOCTYPE html>
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
        `;
        gen.start();
        expect(fs.readFileSync(path,'utf8')).toEqual(text)
    })
})