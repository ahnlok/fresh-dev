// StudentController.js

const express = require("express");
const db = require("../models");

const router = express.Router();

/**
 * Route to render all students to a page. 
 */
router.get("/students", (req, res) => {
  db.Student.findAll()
    .then((allStudents) => {
      res.render("list", {
        students: allStudents
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

/**
 * Route to render the saved pages route.
 */
router.get("/students/saved", (req, res) => {
  db.Student.findAll({
      where: {
        savedState: true
      }
    }).then((allStudents) => {
      res.render("saved", {
        students: allStudents
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

/**
 * Route to render the search pages route.
 */
router.get("/students/search/:term", (req, res) => {
  db.Student.findAll({
      where: {
        mainLanguage: req.params.term
      }
    }).then((allStudents) => {
      res.render("saved", {
        students: allStudents
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

/**
 * Route to render the new student form.
 */
router.get("/students/new", (req, res) => {
  res.render("post");
});

/**
 * Route to pull student data from the database
 * Render the student data to a pre-populate form.
 */
router.get("/students/:id/edit", (req, res) => {
  db.Student.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((singleStudent) => {
      const dataObject = {
        ...singleStudent.dataValues,
        options: [{
            display: "Connected",
            selected: singleStudent.dataValues.status === "Connected",
          },
          {
            display: "On Waiting List",
            selected: singleStudent.dataValues.status === "On Waiting List",
          },
        ],
      };
      res.render("edit-post", dataObject);
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
  db.Student.findOne({
      where: {
        id: req.params.id
      },
    })
    .then((singleStudent) => {
      res.render("singleStudent", singleStudent.dataValues);
    })
    .catch((err) => {
      res.status(500).end();
    });
});

/**
 * API Route to create a new student.
 */
router.post("/api/students", (req, res) => {
  db.Student.create(req.body)
    .then((createdStudent) => {
      res.json(createdStudent);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

/**
 * Save Router
 */
router.put("/api/students/save/:id", (req, res) => {

  console.log(req.params.id);

  db.Student.update({
    savedState: true
  }, {
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.status(404).end();
  });
});

// Edit Router (Update an existing student post by ID)
router.put("/api/students/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  db.Student.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.status(404).end();
  });
});

/**
 * API Route to delete a student by ID
 */
router.delete("/api/students/delete/:id", (req, res) => {
  db.Student.destroy({
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