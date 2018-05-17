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

const scoreGenerator = () => {
  const scoreArray = [];
  for (var i = 0; i < 10; i++) {
    scoreArray.push( 1 + (Math.floor(Math.random() * 5)));
    let comma = ',';
    if (i === 9) {
      comma = '\n';
    }
    console.log(`${scoreArray[i]}${comma}`);
  }
  //console.log(scoreArray);
}

scoreGenerator();



