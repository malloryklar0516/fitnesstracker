// const express = require('express');
// const router = express.Router();

// router.get('/',  async (req, res) => {
//   try{
//     const workoutData = await Workout.findAll();
//     const workouts = workoutData.map((workout) => workouts.get({ plain: true }));
//      res.json({workouts});
//    // res.render('all-workouts', { workouts });
//   }

//   catch (err) {
//     res.status(500).json(err);}
// });



//check?
const router = require('express').Router();
const { Workout } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

  try {
    const workoutData = await Workout.findAll({
      where: {
        UserId: req.session.userId,
      },
    });

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render('all-workouts', {
      layout: 'workout-dashboard',
      workouts,
    });
  } catch (err) {
    console.log(err);
     res.redirect('/login'); 
  }
});
module.exports = router;


