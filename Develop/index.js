const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const { promisify } = require("util");
const writeAsycn = util.promisify(fs.writeFile)
// array of questions for user
const questions = [
    {   
        type: "input",
        message: "What's the name of your project title?",
        name: "title",
    },

    {
        type: "input",
        message: "Please enter description for this project",
        name: "description",
    },

    {
        type: "input",
        message: "Please provide installation instruction if any",
        name: "installation",
    },

    {
        type: "input",
        message: "Please enter usage information",
        name: "usage",
    },

    {
        type: "list",
        message: "Select License you are using:",
        name: "license",
        choices: [
          "Apache",
          "MIT",
          "ISC",
          "GNU GPLv3",
        ]
    },

    {
        type: "input",
        message: "Who is/are contributing to this project?",
        name: "contributing",
    },

    {
        type: "input",
        message: "Please provide test instruction if applicable.",
        name: "test",
    },

    {
        type: "input",
        message: "What's Your GitHub Username?",
        name: "github",
    },

    {
        type: "input",
        message: "What's Your Email Address?",
        name: "email",
    },

    
];


// function to write README file
async function writeToFile(fileName, data) {
    await writeAsync(fileName, data);
    if (err){
        throw err;
    }
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers)
    await writeAsycn(answers.title + ".md", htmlString)
}

// function call to initialize program
init();
