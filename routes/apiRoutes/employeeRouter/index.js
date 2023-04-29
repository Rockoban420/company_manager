const router = require('express').Router();
const employeeController = require('../../../controllers/employeeController');

router.get('/', employeeController.getEmployees);
router.post('/', employeeController.addEmployee);
// router.put('/:id', employeeController.updateEmployeeRole);

module.exports = router;