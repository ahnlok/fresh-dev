const { Model } = require("sequelize/types");
var db = require("../models");

model.exports = function(app) {
    // Finding All Post
    app.get("/api/students", function(req, res) {
        var query = {};
        if (req.query.language_id) {
            query.LanguageId = req.query.language_id;
        } else if (req.query.student_id) {
            query.StudentId = req.query.student_id;
        }
        db.Student.findAll({
            where: query,
            include: [db.Language]
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });
    // Get Selected Post
    app.get("/api/studentss/:id", function (req, res) {
        db.Student.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Language]
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });
    // Save Post
    app.post("/api/students", function(req,res) {
        db.Student.create(req.body).then
        (function(dbStudent) {
            res.json(dbStudent);
        });
    });
    // Delete route for deleting posts
    app.delete("/api/students/:id", function(req, res) {
        db.Student.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    // Put UPDATE route
    app.put("/api/posts", function(req, res) {
        db.Student.update(
            req.email,
            {
                where: {
                    id: req.email.id
                }
            },
            req.school,
            {
                where: {
                    id: req.school
                }
            },
            req.description,
            {
                where: {
                    id: req.body.id
                }
        
            }).then(function(dbStudent) {
        res.json(dbStudent);
        });
    });
};