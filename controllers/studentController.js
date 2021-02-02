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
      console.log(allStudents);
      res.render("list", { students: allStudents });
    })
    .catch((err) => {
      console.log(err);
      //TODO: render 404 page if we're unable to return students
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
      //TODO: render 404 page if we're unable to return students
      res.status(500).end();
    });
  // res.render("saved");
});

/**
 * Route to render the new student form.
 */
router.get("/students/new", (req, res) => {
  res.render("post");
});

// 
/**
 * Route to pull student data from the database
 * Render the student data to a pre-populate form.
 */
router.get("/students/:id/edit", (req, res) => {
  db.Student.findOne({ where: { id: req.params.id } })
    .then((singleStudent) => {
      const dataObject = {
        ...singleStudent.dataValues,
      options: [
        {
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
    where: { id: req.params.id },
  })
    .then((singleStudent) => {
      // console.log(singleStudent.dataValues);
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
// router.post("/api/students", function(req, res) {
//   db.Student.create([
//     "firstName", 
//     "lastName",
//     "email",
//     "school",
//     "mainLanguage",
//     "secondaryLanguage",
//     "linkedIn",
//     "gitHub",
//     "resume",
//     "description",
//   ], [
//     req.body.firstName, 
//     req.body.lastName,
//     req.body.email,
//     req.body.school,
//     req.body.mainLanguage,
//     req.body.secondaryLanguage,
//     req.body.linkedIn,
//     req.body.gitHub,
//     req.body.resume,
//     req.body.description,
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

/**
 * Save Router
 */
router.put("/api/students/save/:id", (req, res) => {
  
  console.log(req.params.id);

  db.Student.update({savedState: true},{
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
//   if (postOptions.includes(req.body.description)) {
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
//   } else {
    // res.status(400).end();
//   }
});
/**
 * API Route to delete a student by ID
 */
router.delete("/api/students/:id", (req, res) => {
  db.Student.delete({
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
