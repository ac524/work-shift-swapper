const router = require('express').Router();
const { Shift, User } = require('../../models');
const withAuthApi = require('../middleware/withAuthApi');

router.get( '/', async (req, res) => {

    res.json( await Shift.findWithUser() );

} );

router.post( '/', withAuthApi, async (req, res) => {

    const shift = await Shift.create( {
        ...req.body,
        owner_id: req.session.user_id
    } );

    res.json( shift );

} );

module.exports = router;