const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "../test-data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "../data.txt"), "utf-8", (_, data) => {
  let total = 0;

  data.split("\n").forEach((line) => {
    let lineTotal = 0;
    const [winners, numbers] = line
      .split(": ")
      .at(-1)
      .split(" | ")
      .map((x) => [...x.matchAll(/[0-9]+/g)].map((y) => y[0]));

    winners.forEach((n) => {
      if (!numbers.includes(n)) return;

      lineTotal = lineTotal > 0 ? lineTotal * 2 : 1;
    });
    total += lineTotal;
  });

  console.log(total);
});
