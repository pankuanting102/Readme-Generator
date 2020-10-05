// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
### Welcome to ${data.title}'s page
### Use
  - like so...
  - my age: ${data.age}

`
}

module.exports = generateMarkdown;
