// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = require('./questionTemplate');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Filename: " + fileName);
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            const readMeText = generateMarkdown(response);
            writeToFile('README.MD', readMeText);
        })
        .catch(err => console.log(err));
}

// Function call to initialize app
init();