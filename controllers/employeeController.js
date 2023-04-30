const connection = require('../config');

const getEmployees = async (req, res) => {
    try {
        const [ rows ] = await connection.query(
            `SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id;`
        );
        res.status(200).json(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

const addEmployee = async (req, res) => {
    try {
        const [ rows ] = await connection.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
            [req.body.first_name, req.body.last_name, req.body.role_id, req.body.manager_id]
        );
        res.status(200).json({ message: 'Employee added successfully!' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

const updateEmployeeRole = async (req, res) => {
    try {
        const [ rows ] = await connection.query(
            'UPDATE employee SET role_id = ? WHERE id = ?',
            [req.body.role_id, req.params.id]
        );
        res.status(200).json({ message: 'Employee role updated successfully!' });
    }
    catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getEmployees,
    addEmployee,
    updateEmployeeRole
};