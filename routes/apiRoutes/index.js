const router = require('express').Router();
const roleRouter = require('./roleRouter');
const employeeRouter = require('./employeeRouter');
const departmentRouter = require('./departmentRouter');

router.use('/role', roleRouter);
router.use('/employee', employeeRouter);
router.use('/department', departmentRouter);

module.exports = router;