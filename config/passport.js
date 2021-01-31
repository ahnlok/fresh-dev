var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function(email, password, done) {
        // When a user tries to sign in this code runs
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser) {
            // If there's no user with the given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect Email."
            });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)
        ) {
            return done(null, false, {
                message: "Incorrect Password."
            });
        }
        // If none of the above, return the user
        return done (null, dbUser);
        })
    }
));

// Sequelize need to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;