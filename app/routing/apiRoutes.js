// @ts-check

// DEPENDENCIES
// =============================================================================
const path = require("path");

// LOAD DATA
//==============================================================================
var friends = require("./../data/friends");

// ROUTING
// =============================================================================

module.exports = function(app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
    console.log('Sending friends data');
    });
}; // end of module.exports