const connection = require('../config');

// Get all departments
const getAllDepartments = async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM department;');
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addDepartment = async (req, res) => {
    try {
        const [rows] = await connection.query('INSERT INTO department SET ?;', req.body);
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllDepartments,
    addDepartment
};