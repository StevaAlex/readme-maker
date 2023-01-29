const inquirer = require('inquirer');
const fs = require('fs');

function getLicense (lic) {
    switch (lic) {
        case 'MIT':
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
        case 'IMB':
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        case 'GNU GPL v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        case 'SC License (ISC)':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        case 'Attribution License (BY)':
            return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
        case 'The zlib/libpng License':
            return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
        case 'SIL Open Font License 1.1':
            return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
        case 'The Artistic License 2.0':
           return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        default:
            break;

    }
}

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
            choices: [
                'MIT', 'The zlib/libpng License', 'Mozilla Public License 2.0', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'Attribution License (BY)', 'SC License (ISC)', 'GNU GPL v3', 'IMB'
            ]
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
       let licenseAns = (JSON.stringify((answers.license))).replace(/[\[\]"]/g,""); //the prompt returns ["MIT"], use the replace function to remove the brackets and quotes
        let licenseImage = getLicense(licenseAns); 
        console.log(licenseImage);
        let readFile = JSON.stringify(` 
# ${answers.name} ${licenseImage}

 ## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
        
## Description 

        ${answers.desc1} 
    Some of the challenges faced:
        ${answers.desc4} 
    Some featured hoped to be implemented in the future:
        ${answers.desc2} 
    Technologies used:
        ${answers.desc3}
        
## Installation

        ${answers.install}
        
        
## Usage 

        Click the link below to access the application
        ${answers.appLink}
![screenshot of application](${answers.imgLink})
        
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