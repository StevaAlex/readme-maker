const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What does your application do?',
            name: 'desc1'
        },
        {
            type: 'input',
            message: 'What are some of the challenges you faced?',
            name: 'desc2'
        },
        {
            type: 'input',
            message: 'What are some features you hope to implement in the future?',
            name: 'desc3'
        },
        {
            type: 'input',
            message: 'What technologies did you use?',
            name: 'desc4'
        },
        {
            type: 'input',
            message: 'Please enter installation steps or N/A if there is not any steps',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Enter the link for your application',
            name: 'appLink'
        },
        {
            type: 'input',
            message: 'Enter the link to your application screenshot',
            name: 'imgLink'
        },
        {
            type: 'checkbox',
            message: 'Please choose a license',
            name: 'license',
            choices: ['MIT', 'zLib License', 'Mozilla Public License 2.0', 'Microsoft Public License', 'PostgreSQL License']
        },
        {
            type: 'input',
            message: 'Please enter testing instructions',
            name: 'tests'
        },
        {
            type: 'email',
            message: 'Please enter email to add to README',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter your github username',
            name: 'gitName'
        },
        {
            type: 'input',
            message: 'Please enter your github link',
            name: 'gitLink'
        }
    ])
    .then((answers) => {
        let readFile = JSON.stringify(` 
        # ${answers.name}

        ## Description
        ${answers.desc1}
        ${answers.desc4}
        ${answers.desc2}
        ${answers.desc3}

        ## Table of contents
        - Description
        - Installation
        - Usage 
        - License 
        - Contributing
        - Tests
        - Questions
        
        ## Installation
        ${answers.install}
        
        
        ## Usage 
        Click the link below to access the application
        ${answers.appLink}
        
        ![screenshot of application](${imgLink})
        
        
        ## License
        
        ${answers.license}
        
        ## Contributing 
        Pull requests are welcome. For major changes, please open an issue first
        to discuss what you would like to change.
        
        ## Tests 
        ${answers.tests}
        
        ## Questions
        Any questions, please contact me on ${answers.email}
        ${answers.gitName}
        ${answers.gitLink}
        
        `)
        fs.writeFile('README.md', JSON.parse(readFile), (err) =>
            err ? console.error(err)
                : console.log("Done!")
        )
    })