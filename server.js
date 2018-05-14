// @ts-check
// This turns on type checking in VS Code

// DEPENDENCIES
// =============================================================================
const express = require("express");
const bodyParser = require("body-parser");
// built-in module
var path = require('path');

// EXPRESS CONFIGURATION
// =============================================================================

const app = express();
// Sets an initial port -- Heroku's choice, or default
let PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
// =============================================================================
require("./app/routing/htmlRoutes")(app);

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './app/public/home.html'));
//   console.log(path.resolve(__dirname, './app/public/index.html'));
// });

// app.get('/survey', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './app/public/survey.html'));
//   console.log(path.resolve(__dirname, './app/public/survey.html'));
// });

// TODO: add other routes

// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});