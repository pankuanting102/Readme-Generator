// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Welcome to ${data.title}
\n<img src="https://img.shields.io/badge/license-${data.license}-green">
\n
# Description
\n${data.description}
\n
\n
\n
# Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
\n
\n
\n
# Installation
\n${data.installation}
\n
\n
\n
# Usage 
\n${data.usage}
\n
\n
\n
# License
\n${data.license}
\n
\n
\n
# Contributing
\n${data.contributing}
\n
\n
\n
# Test
\n${data.test}
\n
\n
\n
# Questions 
\nGitHub Repository: https://github.com/${data.github}
\nEmail Address: ${data.email}

`
}

module.exports = generateMarkdown;
