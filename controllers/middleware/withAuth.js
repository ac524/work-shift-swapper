const withAuth = (req, res, next) => {

    if( req.session.logged_in ) {
        return next();
    }

    res.redirect('/login');

}

module.exports = withAuth;