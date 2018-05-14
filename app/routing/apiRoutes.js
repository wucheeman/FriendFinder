// @ts-check

// DEPENDENCIES
// =============================================================================
const path = require("path");

// LOAD DATA
//==============================================================================
const friends = require("./../data/friends");

// ROUTING
// =============================================================================

module.exports = function(app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
    console.log('Sending friends data');
  });

  app.post('/api/friends', function (req, res) {
    const {
      name,
      photo,
      scores,
    } = req.body;
    // TODO: process request and act accordingly
    console.log(req.body);
    
    res.send(true);
  }); // end of app.post
}; // end of module.exports