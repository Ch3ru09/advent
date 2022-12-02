const fs = require("fs/promises");

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    console.log(getMaxSum(data.split("\n")));
  })

function getMaxSum(data) {
  let max = Number.NEGATIVE_INFINITY;
  let temp = 0;
  data.forEach(calories => {
    if (calories == "") {
      max = temp;
      temp = 0;
    }
  });
}