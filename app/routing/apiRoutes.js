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
