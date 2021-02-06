// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Enter your Github Username!');
                return false;
            }
        }

    }, 
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Enter your email!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is your project name? (do not use spaces)",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Enter your project name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: "Write a short description of your project: ",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Enter a description of your project!');
                return false;
            }
        }

    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ['MIT', 'Apache', 'GPL'],
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Choose a license for your project!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'dependencies',
        message: "What command should be run to install dependencies?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Enter the command!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'runTest',
        message: "What command should be entered to run tests?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Enter the command!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'usingRepo',
        message: "What does the user need to know about using the repo?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Tell us about using the repo!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'contributeToRepo',
        message: "What does the user need to know about contributing to the repo?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log('Tell us about contributing to the repo!');
                return false;
            }
        }

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const README = `
    # ${data.projectName}
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    ## Table of contents
    * [Description] (#description)
    * [Usage] (#usage)
    * [About] (#about)
    
    ## Description
    ${data.description}
    
    ## Usage
    Run ${data.dependencies} to install dependencies.
    
    To run the program, type ${data.runTest} into the console.
    
    ${data.usingRepo} ${data.contributeToRepo}
    
    ## About
    Email: ${data.email}
    Github: github.com/${data.github}`;

    fs.writeFile(`${projectName}-README.md`, README, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile(answers.projectName, answers);
    })
    .catch(err => {
        if (err) {
            throw err;
        }
        console.log('done');
    })
}

// Function call to initialize app
init();
