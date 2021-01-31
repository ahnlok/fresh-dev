const express = require("express");
const db = require("../models");

const router = express.Router();

/**
 * Route to render all students to a page. 
 */
router.get("/students", (req, res) => {
  db.Train.findAll()
    .then((allTrains) => {
      res.render("all-students", { students: allTrains });
    })
    .catch((err) => {
      console.log(err);
      //TODO: render 404 page if we're unable to return students
      res.status(500).end();
    });
});

/**
 * Route to render the new student form.
 */
router.get("/students/new", (req, res) => {
  res.render("new-student");
});

/**
 * Route to pull student data from the database
 * Render the student data to a pre-populate form.
 */
router.get("/students/:id/edit", (req, res) => {
  db.Train.findOne({ where: { id: req.params.id } })
    .then((singleTrain) => {
      res.render("edit-student", singleTrain.dataValues);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

/**
 * Display information about a single student.
 */
router.get("/students/:id", (req, res) => {
  db.Train.findOne({
    where: { id: req.params.id },
  })
    .then((singleTrain) => {
      // console.log(singleTrain.dataValues);
      res.render("single-student", singleTrain.dataValues);
    })
    .catch((err) => {
      res.status(500).end();
    });
});

/**
 * API Route to create a new student.
 */
router.post("/api/students", (req, res) => {
  db.Train.create(req.body)
    .then((createdTrain) => {
      res.json(createdTrain);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

/**
 * API Route to update an existing student by ID
 */
router.put("/api/students/:id", (req, res) => {
  db.Train.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

/**
 * API Route to delete a student by ID
 */
router.delete("/api/students/:id", (req, res) => {
  db.Train.delete({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;
