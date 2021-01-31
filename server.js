// Requiring necessary npm packages
const express = require("express");
// Please do not delete this line ("session") -Sung
const session = require("express-session");
// Requiring passport as we've configured it
// Please do not delete this line ("passport") -Sung
const passport = require("./config/passport");
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

// Creating express app and configuring middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Please Do NOT delete this line ("public") -Sung
app.use(express.static("public"));
// Please DO NOT delete this line ("keyboard cat")-Sung
// We need to use session to Keep track of our user's login status
// Do NOT Change or Delete -Sung
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
// DO NOT Change or Delete -Sung

// Requiring our routes
// Do NOT Change or Delete -Sung
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
// require("./routes/language-api-routes.js")(app);
// require("./routes/student-api-routes.js")(app);
// Do NOT Change or Delete -Sung

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

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
