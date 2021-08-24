const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shiftRoutes = require('./shiftRoutes');
const offerRoutes = require('./offerRoutes');

router.use('/users', userRoutes);
router.use('/shifts', shiftRoutes);
router.use('/offers', offerRoutes);

module.exports = router;
