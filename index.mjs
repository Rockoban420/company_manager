import inquirer from 'inquirer';
import consoleTable from 'console.table';

const questions = () => {
  inquirer.prompt([
    {
      name: 'menu',
      message: 'What would you like to do?',
      type: 'rawlist',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
  ]).then(answers => {
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
        console.log('helloDepartment');
        addDepartment();
        break;

      case 'Quit':
        console.log('Goodbye!');
        return;
    }
  });
};

const addDepartment = () => {
  inquirer.prompt([
    {
      name: 'name',
      message: 'What is the name of the department?',
      type: 'input',
    }
  ]).then(answers => {
    fetch('http://localhost:3001/api/department', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    });
    questions();
  });
};

const viewAllDepartments = () => {
  fetch('http://localhost:3001/api/department', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      dataDisplayer(data);
    });
};

const addRole = () => {
  inquirer.prompt([
    {
      name: 'title',
      message: 'What is the title of the role?',
      type: 'input',
    },
    {
      name: 'salary',
      message: 'What is the salary of the role?',
      type: 'input',
    },
    {
      name: 'department_id',
      message: 'What is the department id of the role?',
      type: 'input',
    }
  ]).then(answers => {
    fetch('http://localhost:3001/api/role', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    });
    questions();
  });
};

const viewAllRoles = () => {
  fetch('http://localhost:3001/api/role', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      dataDisplayer(data);
    });
};

const viewAllEmployees = () => {
  fetch('http://localhost:3001/api/employee', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      dataDisplayer(data);
    });
};

const addEmployee = () => {
  inquirer.prompt([
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

    .then(answers => {
      fetch('http://localhost:3001/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });
      questions();
    });
};

const updateEmployeeRole = (id) => {

  fetch('http://localhost:3001/api/employee', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      const employeeList = data;
    });

  inquirer.prompt([
    {
      name: 'employee_id',
      message: 'What is the employees id?',
      type: 'rawlist',
      choices: employeeList
    },
    {
      name: 'role_id',
      message: 'What is the employees new role? (n*)',
      type: 'input',
    }
  ]).then(answers => {
  fetch(`/api/employee/:${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answers),
  });
  questions();
});
};

const dataDisplayer = (data) => {
  const columns = [];
  for (const key in data[0]) {
    columns.push(key);
  }
  const rows = [];
  for (const obj of data) {
    const row = [];
    for (const key in obj) {
      row.push(obj[key]);
    }
    rows.push(row);
  }
  console.table(columns, rows);
  questions();
};


function index_init() { }

questions();

index_init();
