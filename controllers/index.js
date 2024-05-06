const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes'); //see progress
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/workouts', dashboardRoutes);

module.exports = router;

