let login = require('../modules/login')

module.exports = function(app) {
    //Renderiza o index caso o usuário esteja logado.
    app.get('/minhagoiania/home', isLoggedIn, function(req, res) {
        res.status(200).send({ user: req.user, success: true });
    });

    app.get('/minhagoiania/logout', function(req, res) {
        req.logOut(); // exposto pelo passport
        res.status(200).send({ success: true })
    });

    app.route('/minhagoiania/login')
        .post(login.newLogin)

    app.route('/minhagoiania/signup')
        .post(login.signup)

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.status(403).send({ success: false })
    }
}