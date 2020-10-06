// function to generate markdown for README
function generateMarkdown(data) {
  return `
### Welcome to ${data.title}'s page
\n<img src="https://img.shields.io/badge/license-${data.license}-green">
\n### Table of Content
***
\n
\n
\n
### Description
***
\n${data.description}
### Installation
***
\n
\n
\n
\n${data.installation}
### Usage 
***
\n${data.description}
\n
\n
\n
### Contributing
***
\n${data.contributing}
\n
\n
\n
### Test
***
\n${data.test}
### Questions 
***
\n${data.github}
\n${data.email}

`
}

module.exports = generateMarkdown;
