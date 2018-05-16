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
app.use(express.static(path.join(__dirname, "./app/public")));

// ROUTES
// =============================================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});