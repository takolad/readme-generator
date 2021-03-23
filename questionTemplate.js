const licenseArray = [
    'Apache License 2.0',
    'Boost Software License 1.0',
    'GNU General Public License v3.0', 
    'MIT License',
    'The Unlicense',
    'Mozilla Public License 2.0',
    'BSD 2-Clause "Simplified" License', 
    'BSD 3-Clause "New" or "Revised" License', 
    'Creative Commons Zero v1.0 Universal', 
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
];

[
    {   // Title
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {   // Description
        type: 'input',
        message: 'Enter a description of the project:',
        name: 'description',
    },
    {   // Installation Instructions
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'install',
    },
    {   // Usage Information
        type: 'input',
        message: 'What is the title of your project?',
        name: 'usage',
    },
    {   // License
        type: 'list',
        message: 'Choose a license for your project.',
        name: 'license',
        choices: licenseArray,
    },
    {   // Contributing Guidelines
        type: 'input',
        message: 'Enter any contribution guidelines:',
        name: 'contribute',
    },
    {   // Test Instructions?
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test',
    },
    {   // GitHub username for Questions section
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {   // Email for Questions section
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
]