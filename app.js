import inquirer from 'inquirer'
import fs from 'fs'
import generateReadMe from './template'

const readMeQuestions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
      },
      {
        type: "input",
        message: "provide is a description?",
        name: "description",
      },
      {
        type: "input",
        message: "Installing steps?",
        name: "installation",
      },
      {
        type: "input",
        message: "provide instructions?",
        name: "usage",
      },
      {
        type: "input",
        message: "want to credit anyone?",
        name: "credits",
      },
      {
        type: "list",
        message: "which software license?",
        name: "license",
        choices: ["MIT", "APACHE", "ISC", "NONE"],
      },
      {
        type: "input",
        message: "Contributions?",
        name: "contributor",
      },
      {
        type: "input",
        message: "your github profile name?",
        name: "username",
      },
      {
        type: "input",
        message: "your email?",
        name: "email",
      }
]

const createReadMe = async() => {
    const results = await inquirer
    .prompt(readMeQuestions)
    console.log(results)
    const response = generateReadMe(results)
    fs.writeFile("README.md", response, (err) => {
        !err ? console.log("Checkout Your Readme") : console.error(err) 
        }  
    );
}

createReadMe()