const fs = require("fs/promises");

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    // console.log(getMaxSum(data.split("\r\n")));
    console.log(getMax3(data.split("\r\n")));
  })

function getMaxSum(data) {
  let largestNumber = Number.NEGATIVE_INFINITY;
  let temporarySum = 0;
  data.forEach(calories => {
    if (calories == "") {
      largestNumber = Math.max(largestNumber, temporarySum);
      temporarySum = 0;
      return
    }
    temporarySum += Number(calories);
  });
  return largestNumber
}

function getMax3(data) {
  let largestNumbers = new Array(3).fill(Number.NEGATIVE_INFINITY)
  let temporarySum = 0;
  data.forEach(calories => {
    if (calories == "") {
      largestNumbers.push(temporarySum)
      largestNumbers.sort((a, b) => b - a)
      largestNumbers.pop()
      temporarySum = 0
      return
    }
    temporarySum += Number(calories);
  });
  return largestNumbers.reduce((a, b) => a + b)
}