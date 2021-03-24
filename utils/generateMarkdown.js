// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        switch (license) {
            case ('Apache License 2.0'):
                return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
            case ('Boost Software License 1.0'):
                return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
            case ('BSD 3-Clause "New" or "Revised" License'):
                return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
            case ('GNU General Public License v3.0'):
                return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
            case ('MIT License'):
                return 'https://img.shields.io/badge/License-MIT-yellow.svg'
            case ('The Unlicense'):
                return 'https://img.shields.io/badge/license-Unlicense-blue.svg'
            case ('Mozilla Public License 2.0'):
                return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
            case ('Eclipse Public License 2.0'):
                return 'https://img.shields.io/badge/License-EPL%202.0-red.svg'
            case ('Creative Commons Zero v1.0 Universal'):
                return 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg'
            case ('BSD 2-Clause "Simplified" License'):
                return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg'
            case ('GNU Affero General Public License v3.0'):
                return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg'
            case ('GNU General Public License v2.0'):
                return 'https://img.shields.io/badge/License-GPL%20v2-blue.svg'
            case ('GNU Lesser General Public License v2.1'):
                return 'https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg'
            default:
                return ''
        }
    } else return ''
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        switch (license) {
            case ('Apache License 2.0'):
                return 'https://opensource.org/licenses/Apache-2.0'
            case ('Boost Software License 1.0'):
                return 'https://www.boost.org/LICENSE_1_0.txt'
            case ('BSD 3-Clause "New" or "Revised" License'):
                return 'https://opensource.org/licenses/BSD-3-Clause'
            case ('GNU General Public License v3.0'):
                return 'https://www.gnu.org/licenses/gpl-3.0'
            case ('MIT License'):
                return 'https://opensource.org/licenses/MIT'
            case ('The Unlicense'):
                return 'http://unlicense.org/'
            case ('Mozilla Public License 2.0'):
                return 'https://opensource.org/licenses/MPL-2.0'
            case ('Eclipse Public License 2.0'):
                return 'https://opensource.org/licenses/EPL-2.0'
            case ('Creative Commons Zero v1.0 Universal'):
                return 'http://creativecommons.org/publicdomain/zero/1.0/'
            case ('BSD 2-Clause "Simplified" License'):
                return 'https://opensource.org/licenses/BSD-2-Clause'
            case ('GNU Affero General Public License v3.0'):
                return 'https://www.gnu.org/licenses/agpl-3.0'
            case ('GNU General Public License v2.0'):
                return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
            case ('GNU Lesser General Public License v2.1'):
                return 'https://www.gnu.org/licenses/lgpl-2.1'
            default:
                return ''
        }
    } else return ''
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        let licenseLink = renderLicenseLink(license);
        let licenseText = `This user has selected: **${license}**, details can be found here [License Info](${licenseLink})`;
        return licenseText;
    } else return ''
}

// Generates markdown for README
function generateMarkdown(data) {

    // Aquires the matching license badge url
    let licenseImgUrl = renderLicenseBadge(data.license);
    let imgUrlFormatted = '';
    // Formats the url to be inserted as an image link to the top of the template literal
    if (data.license) {
        imgUrlFormatted = `![${data.license} Badge](${licenseImgUrl})`;
    }

    // License info to be inserted in to the license section of the template literal.
    let licenseString = renderLicenseSection(data.license);

    return `${imgUrlFormatted}

# ${data.title}

## Description

    ${data.description}

## Table of Contents

*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)

## Installation

    ${data.install}

## Usage

    ${data.usage}

## License

    ${licenseString}

## Contributing

    ${data.contribute}

## Tests

    ${data.test}

## Questions

    If you have any questions, I can be reached at  
    [GitHub Profile](https://github.com/${data.gitHub}) or  
    [Email](mailto:${data.email}).
    `;
}

module.exports = generateMarkdown;
