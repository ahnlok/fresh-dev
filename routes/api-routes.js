var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the suer will be sent an error
    // Route for Log-In
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });
    // If the user is created successfully, proceed to log the user in, otherwise send back an error
    // Rout for Sign-Up
    app.post("/api/signup", function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            res.status(401).json(err);
        }); 
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });
    app.get("/api/user_data", function(req,res) {
        if (!req.user) {
            // If the user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
}