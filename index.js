// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = require('./questionTemplate');

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            const readMeText = generateMarkdown(response);
            try {
                writeToFile('./README.MD', readMeText);
                console.log("Successfully wrote file README.MD");
            } catch(err) { console.log(err) };
        })
        .catch(err => console.log(err));
}

// Call to initialize app
init();