const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "./test-data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "./data.txt"), "utf-8", (_, data) => {
  data = data.split("\n");
  const times = [...data[0].matchAll(/[0-9]+/g)].map((x) => Number(x[0]));
  const distances = [...data[1].matchAll(/[0-9]+/g)].map((x) => Number(x[0]));

  const ranges = getRanges(times, distances);

  const total = ranges.reduce((prev, curr) => {
    return prev * curr.reduce((a, b) => b - a);
  }, 1);

  console.log(total);
});

function getRanges(times, distances) {
  return distances.map((distance, i) => {
    const time = -times[i];

    // quadratic:
    const leftSide = Math.sqrt(time ** 2 - 4 * distance);

    return [
      Math.floor((-time - leftSide) / 2),
      Math.ceil((-time + leftSide) / 2) - 1,
    ];
  });
}

// * 131376
