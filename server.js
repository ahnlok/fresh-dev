// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");

const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();
const db = require("./models");

const StudentController = require("./controllers/studentController");

// Setting up port
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// our routes
app.use(StudentController);

// Syncing our database and logging a message to the user upon success
db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
