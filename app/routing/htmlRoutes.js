
// @ts-check

// DEPENDENCIES
// =============================================================================
const path = require("path");


// ROUTING
// =============================================================================

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './app/public/home.html'));
    console.log(path.resolve(__dirname, './app/public/index.html'));
  });
  
  app.get('/survey', function (req, res) {
    res.sendFile(path.resolve(__dirname, './app/public/survey.html'));
    console.log(path.resolve(__dirname, './app/public/survey.html'));
  });
};