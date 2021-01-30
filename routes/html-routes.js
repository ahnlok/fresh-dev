var path = require("path");

module.exports = function(app) {
    // Index (Main Page) route loads main.handlebars
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/"));
    });
    // Post route to load post.handlebars
    app.get("/post", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/"));
    });
    // List route to load list.handlebars
    app.get("/list", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/" ));
    });
    // Saved route to load saved.handlebars for 
    app.get("/saved", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/"));
    });

};