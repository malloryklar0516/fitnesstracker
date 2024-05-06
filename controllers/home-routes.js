const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Handle the GET request to pull up your workout on the homepage
  // res.send('Welcome to workout progress!');
  const message = 'Welcome to workout progress!'
  res.render( 'home', {
    layout: 'main',
    message,
  });
});
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/new', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login')
    return;
  }

  res.render('workout');
});

module.exports = router;