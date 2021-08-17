const withAuthApi = (req, res, next) => {

    if( req.session.logged_in ) {
        return next();
    }

    res.status(401).json({ error: "Unauthorized" });

}

module.exports = withAuthApi;