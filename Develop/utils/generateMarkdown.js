// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return 'There is no license.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `
  # ${data.projectName}
  
  ${license}

  ## Table of contents
  - [Description](#description)
  - [Usage](#usage)
  - [Testing](#testing)
  - [About](#about)
  - [Contribute](#contribute)
  - [Questions](#questions)
  - [License](#license)
  
  ## Description
  ${data.description}
  
  ## Usage
  Use ${data.dependencies} to install dependencies.
  
  ## Testing
  To run the program, type ${data.runTest} into the console.
  
  ## About
  ${data.usingRepo} 

  ## Contribute
  ${data.contributeToRepo}
  
  ## Questions
  If you have any questions, you can contact me at:
  Email: ${data.email}
  Github: ${data.github}
  
  ## License
  This project is licensed under the terms of ${data.license}.`;
}

module.exports = generateMarkdown;


