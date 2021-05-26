const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');

let employeeArr = [];

function startGenerator() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Team Manager’s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the Team Manager’s employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the Team Manager’s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the Team Manager’s office number?',
      name: 'officeNumber',
    },
    {
      type: 'list',
      message: 'What would you like to create next?',
      choices: ['Add Engineer', 'Add Intern', 'Finish my Team'],
      name: 'next'
    },
  ])
  .then((response) => {
    console.log('Success!');
    //add manager to employee array
    const manager = new Manager (response.name, response.id, response.email, response.officeNumber);
    employeeArr.push(manager);
    //move to next step
    switch (response.next) {
      case "Add Engineer":
        addEngineer();
        break;
      case "Add Intern":
        addIntern();
        break;
      default:
        buildTeam();
    }
  })
};

function addEngineer() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Engineer’s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the Engineer’s ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the Engineer’s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the Engineer’s GitHub username?',
      name: 'github',
    },
    {
      type: 'list',
      message: 'What would you like to create next?',
      choices: ['Add Engineer', 'Add Intern', 'Finish my Team'],
      name: 'next'
    },
  ])
  .then((response) => {
    //add engineer to employee array
    const engineer = new Engineer (response.name, response.id, response.email, response.github);
    employeeArr.push(engineer);
    switch (response.next) {
      case "Add Engineer":
        addEngineer();
        break;
      case "Add Intern":
        addIntern();
        break;
      default:
        buildTeam();
    }

  });
};

function addIntern() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Intern’s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the Intern’s ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the Intern’s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the Intern’s school?',
      name: 'school',
    },
    {
      type: 'list',
      message: 'What would you like to create next?',
      choices: ['Add Engineer', 'Add Intern', 'Finish my Team'],
      name: 'next'
    },
  ])
  .then((response) => {
    //add engineer to employee array
    const intern = new Intern (response.name, response.id, response.email, response.school);
    employeeArr.push(intern);
    switch (response.next) {
      case "Add Engineer":
        addEngineer();
        break;
      case "Add Intern":
        addIntern();
        break;
      default:
        buildTeam();
    }

  });
};


function buildTeam() {
  fs.appendFile('index.html', employeeArr, err => {
    if (err) {
      console.log(err)
      return
    }
  })
};


startGenerator();