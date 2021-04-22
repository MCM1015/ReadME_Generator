// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description about this project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be entered to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project',
        choices: ['MIT', 'ISC', 'IPL-1.0', 'EPL-1.0', 'Apache-2.0', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution information/guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run test(s)'
    },
    {
        type: 'input',
        name: 'questionsgithub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'questionsemail',
        message: 'What is your email address?'
    }]


// Function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) =>
        error ? console.log(error) : console.log('Successfully created ReadME.MD!')
    );
}


// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('./example/README.md', generateMarkdown(data));
    });
}


// Function call to initialize app
init();
