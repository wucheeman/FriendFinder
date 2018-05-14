const assert = chai.assert;
  
describe('Scoring', function() {
  const test_friend = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
  it('sum of scores', function() {
    const absValComparedScores = [];
    const tfCompatScore = sumCompatScores(test_friend);
    assert.equal(tfCompatScore, 32);
  });
  it('differenceArray values with all-0 array', function() {
    const surveyResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    const differenceArray = makeDifferenceArray(surveyResult, test_friend);
    for (let i = 0; i < differenceArray.length; i++) {
      assert.equal(differenceArray[i], test_friend[i]);
    }
  });
  it('differenceArray values with ascending/descending array', function() {
    const surveyResult =    [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    const expectedResults = [4, 1, 1, 0, 0, 4, 2, 2, 2, 0];
    const differenceArray = makeDifferenceArray(surveyResult, test_friend);
    for (let i = 0; i < differenceArray.length; i++) {
      assert.equal(differenceArray[i], expectedResults[i]);
    }
  })
});

describe('friends', function() {
  it('friends loads without error', function() {
    assert.exists(friends);
    assert.isArray(friends);
  });
  it('friends is an array', function() {
    assert.isArray(friends);
  });
  it('friends JSON objects can be converted', function() {
    const firstObject = JSON.parse(friends[0]);
    assert.isObject(firstObject);
    assert.propertyVal(firstObject, 'name', 'Procopius');
  });
});