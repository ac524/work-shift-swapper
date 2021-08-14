const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});


router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
