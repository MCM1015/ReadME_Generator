// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'input',
        name: 'license',
        message: 'Choose a license for this project'
    },
    {
        type: 'input',
        name: 'contribution',
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
    }];

// TODO: Create a function to write README file
const writeToFile = (data) =>
`# ${data.project}

${data.license}

## Description
${data.description}.

## Table of Contents
-Installation

-Usage

-License

-Contribution

-Tests

-Questions

## Installation
To install the required dependencies run the following command:

    ${data.installation}
    
## Usage
${data.usage}.

## License 
This project is licensed under the ${data.license} license.

## Contribution
${data.contribution}.

## Test
To run test(s), run the following command:

    ${data.test}

## Questions
If you have any questions or need to contact me directly please email me at:
${data.questionsemail}

If you would like to see some of my other projects feel free to checkout my GitHub at:
[${data.questionsgithub}](https://github.com/${data.questionsgithub})
`;

inquirer.prompt(questions).then((data) => {
    fs.writeFile('ReadME.MD', writeToFile(data), (error) =>
        error ? console.log(error) : console.log('Successfully created ReadME.MD!')
    );
});


// TODO: Create a function to initialize app



// Function call to initialize app
//init();
