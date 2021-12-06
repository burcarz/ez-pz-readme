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
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your project",
            choices: ["MIT", "BSD",  "GPL"]
        },
        {
            type: "input",
            name: "link",
            message: "Please add a link to your project's license"
        },
        {
            type: "input",
            name: "user",
            message: "Please enter your github username."
        },
        {
            type: "input",
            name: "profileLink",
            message: "Please enter a link to your Github profile"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        }
    ])
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(markdownData => {
        console.log(markdownData)
        return generateMarkdown(markdownData)
    })
    .then(markdownData => {
        // console.log(markdownData.license)
        return writeToFile(markdownData)
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
