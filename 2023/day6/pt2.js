const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "./test-data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "./data.txt"), "utf-8", (_, data) => {
  data = data.split("\n");
  const time = data[0].replaceAll(" ", "").match(/[0-9]+/)[0];
  const distance = data[1].replaceAll(" ", "").match(/[0-9]+/)[0];

  const ranges = getRanges(time, distance);

  const total = ranges.reduce((a, b) => b - a);

  console.log(total);
});

function getRanges(time, distance) {
  time = -time;

  // quadratic:
  const leftSide = Math.sqrt(time ** 2 - 4 * distance);

  return [
    Math.floor((-time - leftSide) / 2),
    Math.ceil((-time + leftSide) / 2) - 1,
  ];
}
