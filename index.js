// npm dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// 
// const Employee = require('./lib/Employee.js');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');

// function addTeamMember () {

// }

// // TODO: Create an array of questions for user input
// const questions = [];

const managerQuestions = () => {
  
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
      }
    ]) .then ((managerData) => {

      console.log(managerData)
      employeeRole()
    })
}

const employeeRole = () => {

  inquirer
  .prompt([
    {
      type: 'list',
      name: 'employee',
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },
  ]) .then ((employeeRoleData) => {
    console.log(employeeRoleData)
    if (employeeRoleData.employee === "Engineer") {
      engineerQuestions()
    }
      else if (employeeRoleData.employee === "Intern") {
        internQuestions()
      }
      else {
        console.log("This is where we create html page")
        createHtmlPage()
      }
  })
}

const engineerQuestions = () => {
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
      }
    ]) .then ((engineerData) => {
      console.log(engineerData)
      employeeRole()
    })
}

const internQuestions = () => {
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
      }
    ]) .then ((internData) => {
      console.log(internData)
      employeeRole()
    })
}
  managerQuestions()
     
 

    const generateHTML = (answers) =>
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;

const createHtmlPage = () => {

    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your Team Summary page!')
    );
  }
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();