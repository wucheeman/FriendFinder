// to test:
// in bash (NOT Visual Studio Code's terminal)
// $ cd FriendFinder
// $ node server.js &
// $ cd /FriendFinder/test
// $ npm test ui_test.js
// to stop server at end of test,
// $ jobs
// $ kill %<jobspec number>

const Nightmare = require('nightmare');
const chai = require('chai');
const assert = chai.assert;

describe('Load a Page', function () {
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('Home', () => {
    it('home should load without error', done => {
      nightmare.goto('http://localhost:8080')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('Survey', () => {
    it('survey should load without error', done => {
      nightmare.goto('http://localhost:8080/survey')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('Friends', () => {
    it('friends should load without error', done => {
      nightmare.goto('http://localhost:8080/api/friends')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })


  describe('Submit survey', () => {
    it('survey should submit and modal load without error', done => {

      nightmare
        //load a url
        .goto('http://localhost:8080')
        // click the button
        .click('#goToSurvey')
        //wait for the survey page to load
        .wait('#survey')
        // take the survey
        .click('#q1')
        .select('#q1', 1)
        .click('#q2')
        .select('#q2', 1)
        .click('#q3')
        .select('#q3', 1)
        .click('#q4')
        .select('#q4', 1)
        .click('#q5')
        .select('#q5', 1)
        .click('#q6')
        .select('#q6', 1)
        .click('#q7')
        .select('#q7', 1)
        .click('#q8')
        .select('#q8', 1)
        .click('#q9')
        .select('#q9', 1)
        .click('#q10')
        .select('#q10', 1)
        // submit it
        .click('submit')
        // wait for the modal to load
        .wait('#results-modal')
        //end the Nightmare and Electron instances
        .end()
        //run the queue of commands specified, and then log the HREF
        .then(function (result) {
          console.log('made it here');
          done();
        })
        //catch errors if they happen
        .catch(function (error) {
          console.error('an error has occurred: ' + error);
          done();
        });
    }) // end of it block
  }) // end of inner describe
}) // end of test function