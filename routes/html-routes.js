// var path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {
//     // Loads the main log in page
//     app.get("/", function(req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//             res.redirect("/members");
//         }
//         res.sendFile(path.join(__dirname, "../public/singup.handlebars"));
//     });
//     // Loads Log-In 
//     app.get("/login", function(req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//             res.redirect("/members");
//         }
//         res.sendFile(path.join(__dirname, "../public/login.handlebars"));
//     });

//     // If a user who is not logged in tries to access this route they will be redirected to the signup page
//     // Loads members page
//     app.get("/members", isAuthenticated, function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/members.handlebars"));
//     });

//     // Loads the Main Page once user is logged in
//     app.get("/main", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/main.handlebars"));
//     });
//     // Post route to load post.handlebars
//     app.get("/post", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/"));
//     });
//     // List route to load list.handlebars
//     app.get("/list", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/" ));
//     });
//     // Saved route to load saved.handlebars for 
//     app.get("/saved", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/"));
//     });

// };