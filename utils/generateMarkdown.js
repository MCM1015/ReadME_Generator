
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  switch(lic) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      break;
    case 'IPL-1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
      break;
    case 'EPL-1.0':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break; 
      case 'Apache-2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break; 
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {
  if (lic === 'None') {
    return ''
  }
    return `(https://opensource.org/licenses/${lic})`
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(lic) {
  if (lic === 'None') {
    return ''
  } else
    return `This project is licensed under the [${lic}]${renderLicenseLink(lic)} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}.
  
  ## Table of Contents
  - [Installation](#Installation)
  
  - [Usage](#Usage)
  
  - [License](#License)
  
  - [Contributing](#Contributing)
  
  - [Test](#Test)
  
  - [Questions](#Questions)
  
  ## Installation
  To install the required dependencies run the following command:
  
      ${data.installation}
      
  ## Usage
  ${data.usage}.
  
  ## License 
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}.
  
  ## Test
  To run test(s), run the following command:
  
      ${data.test}
  
  ## Questions
  If you have any questions or need to contact me directly please email me at:
  <${data.questionsemail}>
  
  If you would like to see some of my other projects feel free to checkout my GitHub at:
  [${data.questionsgithub}](https://github.com/${data.questionsgithub})
  `;
}

module.exports = generateMarkdown;
