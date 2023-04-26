const inquirer = require ('inquirer');

while (answers.menu !== 'Quit') {

inquirer.prompt ([
    {
        name: 'menu',
        message: 'What would you like to do?',
        type: 'rawlist',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
]).then (answers => {
    switch (answers.menu) {
        case 'View All Employees':
        viewAllEmployees();
        break;

        case 'Add Employee':
        addEmployee();
        break;

        case 'Update Employee Role':
        updateEmployeeRole();
        break;

        case 'View All Roles':
        viewAllRoles();
        break;

        case 'Add Role':
        addRole();
        break;

        case 'View All Departments':
        viewAllDepartments();
        break;

        case 'Add Department':
        addDepartment();
        break;

        case 'Quit':
        console.log('Goodbye!');
        break;
    }
});
}

const viewAllEmployees = () =>
  fetch('/api/employee', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const addEmployee = () =>
  inquirer.prompt ([
    {
        name: 'first_name',
        message: 'What is the employees first name?',
        type: 'input',
    }, 
    {
        name: 'last_name',
        message: 'What is the employees last name?',
        type: 'input',
    },
    {
        name: 'role_id',
        message: 'What is the employees role?',
        type: 'input',
    },
    {
        name: 'manager_id',
        message: 'Who is the employees manager?',
        type: 'input',
    }
  ])
  
  .then (answers => {
  fetch('/api/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answers),
    });
});

const updateEmployeeRole = (id) =>
    inquirer.prompt ([

    ]).then(answers => {});

  fetch(`/api/employee/:${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });


function index_init() {}

index_init();
