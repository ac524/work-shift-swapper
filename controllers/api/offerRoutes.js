const router = require('express').Router();
const { Offer, Shift } = require('../../models');

router.post( '/', async (req, res) => {

    const offer = await Offer.create( req.body );

    res.json( offer );

});

router.get( '/offered', async (req, res) => {

    res.json( await Offer.findOffered( req.session.user_id ) );

} );

router.get( '/wanted', async (req, res) => {

    res.json( await Offer.findWanted( req.session.user_id ) );

} );

module.exports = router;