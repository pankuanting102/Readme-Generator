// function to generate markdown for README
function generateMarkdown(data) {
  return `
### Welcome to ${data.title}'s page
\n<img src="https://img.shields.io/badge/license-${data.license}-green">


`
}

module.exports = generateMarkdown;
