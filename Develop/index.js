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
        message: "Project Title",
        name: "title",
    },

    {
        type: "input",
        message: "Description",
        name: "description",
    },

    {
        type: "input",
        message: "Installation Instructions",
        name: "installation",
    },

    {
        type: "input",
        message: "Usage Information",
        name: "usage",
    },

    {
        type: "input",
        message: "Contribution Guidelines",
        name: "contriution",
    },

    {
        type: "input",
        message: "Test Instruction",
        name: "test",
    },

    {
        type: "list",
        message: "What License are you using?",
        name: "license",
        choices: [
          "DUB",
          "GitHub",
          "NPM",
          "Conda",
          "PYPI",
        ]
    },

    {
        type: "input",
        message: "What's your GitHub username?",
        name: "github",
    },

    {
        type: "input",
        message: "What's your email address?",
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
