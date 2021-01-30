var db = require("../models");


module.exports = function(app) {
    // To View All The List
    app.get("/api/languages", function (req,res) {
        db.Language.findAll({
            include: [db.Student]
        }).then(function(dbLanguage) {
            res.json(dbLanguage);
        });
    });
    // To View Selected Post
    app.get("/api/languages/:id", function (req, res) {
        db.Language.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Student]
        }).then(function(dbLanguage) {
            res.json(dbLanguage);
        });
    });
    // To Create Post
    app.post("/api/languages", function (req, res) {
        db.Language.create(req.body).then
        (function(dbStudent) {
            res.json(dbStudent);
        });
    });
    // To Delete Post
    app.delete("/api/authors/:id", function (req, res) {
        db.Language.destroy({
            where: {
                id: req.params.id
            }
            }).then(function(dbLanguage) {
                res.json(dbLanguage);
            });
    });
};