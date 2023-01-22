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
            message: 'Please enter installation steps or N/A if there is not any steps',
            name: 'install'
        }, 
        {
            type: 'input', 
            message: 'Enter the link for your application',
            name: 'applink'
        }, 
        {
            type: 'input', 
            message: 'Enter the link to your application screenshot', 
            name: 'imgLink'
        },
        { 
            type: 'checkbox', 
            message: 'Please choose a license', 
            name:'license', 
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
            name:'email'
        }, 
        { 
            type:'input', 
            message: 'Please enter your github username', 
            name:'gitName'
        }, 
        { 
            type: 'input', 
            message: 'Please enter your github link',
            name: 'gitlink'
        }
    ])