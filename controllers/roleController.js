const connection = require('../config');

// Get all roles
const getAllRoles = async (req, res) => {
    try {
        const [rows] = await connection.query(
            'SELECT * FROM role LEFT JOIN department ON role.department_id = department.id'
            );
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addRole = async (req, res) => {
    try {
        const [rows] = await connection.query('INSERT INTO role SET ?', req.body);
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllRoles,
    addRole
};