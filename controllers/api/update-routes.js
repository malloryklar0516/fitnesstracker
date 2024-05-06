const logger = require('../../utils/logger');
const router = require('express').Router();
const { Workout, User } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/add', withAuth, async (req, res) => {
    console.log("zzz");
    const {date, workout_minutes, workout_type} = req.body;
    try {
    const newWorkout = await Workout.create({
        date:date, 
        workout_minutes: workout_minutes, 
        workout_type: workout_type,
        UserId: req.session.userId});
        res.json(newWorkout);
         // use winston to log entry
        logger.info(`New workout added: Date: ${date}, Minutes: ${workout_minutes}, Type: ${workout_type}`);

   } catch (err) {
    console.error('Error adding workout:', err);
    res.status(500).json(err);
    // use winston to log error
    logger.error(`Error adding workout: ${err.message}`);

   }
});

  

// router.post('/', withAuth, async (req, res) => {
//   try{
//   const { date, workoutmins, workouttype } = req.body;
//   const newWorkout = await Workout.create({
//     date: date,
//     workout_minutes: workoutmins,
//     workout_type: workouttype});
//   // Handle the POST request for adding a workout
//   res.json('Adding new workout!');
//   res.json(newWorkout);
//   }

// catch (error) {
//   console.error('Error adding workout:', error);
//   res.status(500).json({ error: 'Internal Server Error' });
// }});

module.exports = router;
