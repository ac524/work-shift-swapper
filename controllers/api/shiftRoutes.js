const router = require('express').Router();
const { Shift } = require('../../models');

router.get( '/', async (req, res) => {

    res.json( await Shift.findAll() );

} );

router.post( '/', async (req, res) => {

    // res.json( await Shift.findAll() );

} );

module.exports = router;