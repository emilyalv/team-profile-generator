const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

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
    const manager = new Manager (response.name, response.id, response.email, response.officeNumber);
    console.log(manager);
  })
  
    


