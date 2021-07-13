const generateReadMe = (data) => {
  return `
    # **${data.title}**
    ## Description
    ${data.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Contribution](#how-to-contribute)
    - [Tests](#test)
    - [License](#license)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.credits}
    ##Contribution
    ${data.contributor}
    ## Tests
    ${data.tests}
    ## License
    Copyright (c) [2021] [${data.contributor}
    ## Questions can be asked at..
    dmail: <${data.email}> 
    `;
    }

export default generateReadMe;