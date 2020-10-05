const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const { promisify } = require("util");
const writeAsycn = util.promisify(fs.writeFile)
// array of questions for user
const questions = [
    {
        message: "What is your title",
        name: "title",
    },

    {
        message: "What is your name",
        name: "name",
    },

    {
        message: "What is your age",
        name: "age",
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
    await writeAsycn(answers.name + ".md", htmlString)
}

// function call to initialize program
init();
