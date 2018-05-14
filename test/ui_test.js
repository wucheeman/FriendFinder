// to test:
// $ cd FriendFinder
// $ node server.js &
// $ cd /FriendFinder/test
// $ npm test ui_test.js
// to stop server at end of test,
// $ jobs
// $ kill $<jobspec number>

// These tests are throwing an error because they are not in the project root directory!

const Nightmare = require('nightmare')
const chai = require('chai');
const assert = chai.assert;

describe('Load a Page', function() {
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('Home)', () => {
    it('home should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('Survey)', () => {
    it('survey should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/survey')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('Friends)', () => {
    it('friends should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/api/friends')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})