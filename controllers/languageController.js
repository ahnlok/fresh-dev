// languageController.js

const express = require("express");
const db = require("../models");

const router = express.Router();

/**
 * Route to render all students to a page.
 */
router.get("/", (req, res) => {
  db.Language.findAll()
    .then((allLanguages) => {
      console.log(allLanguages);
      res.render("index", { languages: allLanguages });
    })
    .catch((err) => {
      console.log(err);
      //TODO: render 404 page if we're unable to return students
      res.status(500).end();
    });
});

module.exports = router;
