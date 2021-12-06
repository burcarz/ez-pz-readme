// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./utils/generateFile')


const promptUser = markdownData => {
    if (!markdownData)  {
        markdownData = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter your Project Title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: "PLease enter your project's installation instructions."
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter your projects usage information'
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Please enter your project's contribution guidelines"
        },
        {
            type: 'input',
            name: 'test',



            message: "Please enter your project's test instructions"
        }
    ])
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(markdownData => {
        return generateMarkdown(markdownData)
    })
    .then(markdownData => {
        return writeToFile("markdown", markdownData)
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
