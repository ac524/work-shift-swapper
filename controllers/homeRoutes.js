const { Shift, User } = require('../models');
const withAuth = require('./middleware/withAuth');

const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {

  const rawUserShifts = await Shift.findWithUser({
    where: {
      owner_id: req.session.user_id
    }
  });

  console.log(rawUserShifts[0].get({plain: true}));
  

  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', {
    userShifts: rawUserShifts.map( shift => shift.get({plain: true}) ),
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

router.get('/swap', withAuth, (req, res) => {

    res.render('swap');

});

module.exports = router;
