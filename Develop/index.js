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

    }
    // Create other question objects following this model
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
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

//  "What is your email address?", "What is your project's name?", "Please write a short description of your project:", "What kind of license should your project have?", "What command should be run to install your dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"