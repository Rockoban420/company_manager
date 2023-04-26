const router = require('express').Router();
const departmentController = require('../../../controllers/departmentController');

router.get('/', departmentController.getAllDepartments);
router.post('/', departmentController.addDepartment);

module.exports = router;