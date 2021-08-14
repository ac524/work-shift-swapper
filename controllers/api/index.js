const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shiftRoutes = require('./shiftRoutes');

router.use('/users', userRoutes);
router.use('/shifts', shiftRoutes);

module.exports = router;
