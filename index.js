const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// TODO: Create an array of questions for user input
const questions = [];


// Manager Prompts
inquirer
  .prompt([
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the team manager's ID?",
        name: 'id',
      },
    {
      type: 'input',
      message: "What is the team manager's email?",
      name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'office',
      },
      {
        type: 'list',
        name: 'employee',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
      },
     
  ])

  // Engineer Prompts
  inquirer
  .prompt([
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'id',
      },
    {
      type: 'input',
      message: "What is the engineer's email?",
      name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
      },
      {
        type: 'list',
        name: 'employee',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
      },
     
  ])

  // Engineer Prompts
  inquirer
  .prompt([
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'id',
      },
    {
      type: 'input',
      message: "What is the intern's email?",
      name: 'email',
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
      },
      {
        type: 'list',
        name: 'employee',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
      },
     
  ])


// TODO: Create a function to write README file

.then((data) => {
const readMeContent = generateMarkdown(data);

fs.writeFile('README.md', readMeContent, (err) =>
  err ? console.error(err) : console.log('You successfully created a README file!')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();