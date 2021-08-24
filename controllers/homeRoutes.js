const { Shift, User, Offer } = require('../models');
const { Op } = require('sequelize');
const withAuth = require('./middleware/withAuth');

const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {

  const rawUserShifts = await Shift.findWithUser({
    where: {
      owner_id: req.session.user_id
    }
  });

  const rawMyOffers = await Offer.findOffered( req.session.user_id );

  const rawOffer = await Offer.findWanted( req.session.user_id );

  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', {
    userShifts: rawUserShifts.map( shift => shift.get({plain: true}) ),
    myOffer: rawMyOffers.map( shift => shift.get({plain: true}) ),
    offers: rawOffer.map( shift => shift.get({plain: true}) ),
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

router.get('/swap', withAuth, async (req, res) => {

    const rawAvailableShifts = await Shift.findWithUser({
      where: {
        owner_id: {
          [Op.ne]: req.session.user_id
        },
        is_swappable: true
      }
    });

    res.render('select-swap', {
      availableShifts: rawAvailableShifts.map( shift => shift.get({plain: true}) ),
      logged_in: req.session.logged_in
    });

});

router.get('/swap/:swapId', withAuth, async (req, res) => {

  const shift = await Shift.findOneWithUser( req.params.swapId );

  const rawUserShifts = await Shift.findWithUser({
    where: {
      is_swappable: true,
      owner_id: req.session.user_id
    }
  });

  res.render('swap', {
    userShifts: rawUserShifts.map( shift => shift.get({plain: true}) ),
    shift: shift.get({plain: true}),
    logged_in: req.session.logged_in
  });

});

module.exports = router;
