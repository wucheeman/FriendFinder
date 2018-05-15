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
    const newScores = req.body.scores;
    //console.log(typeof newScores);
    //console.log(typeof friends[0]);
    let bestMatch = {};
    let highestCompatScore = 0 ;
    friends.forEach(function(friend, index) {
      let friendObj = JSON.parse(friend);
      let differenceArray = makeDifferenceArray(friendObj.scores, newScores);
      let compatScore = sumCompatScores(differenceArray);
      if (compatScore > highestCompatScore ) {
        highestCompatScore = compatScore;
        bestMatch = friendObj;
      }
    });
    console.log(bestMatch);

    
    res.send(bestMatch);
  }); // end of app.post
}; // end of module.exports


const makeDifferenceArray = (scoreArray_1, scoreArray_2) => {
  const differenceArray = []
  for (let i = 0; i < scoreArray_1.length; i++) {
    differenceArray.push(Math.abs(scoreArray_1[i] - scoreArray_2[i]))
  }
  return differenceArray;
}

const sumCompatScores = (scoreArray) => {
  return scoreArray.reduce((acc, val) => acc + val);
}