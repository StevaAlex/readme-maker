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
            message: 'What are some of the challenges you faces and features you hope to implement in the future?', 
            name: 'desc2'
        }
    ])