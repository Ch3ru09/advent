const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "../test-data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "../data.txt"), "utf-8", (_, data) => {
  let total = 0;

  const lines = data.split("\r\n");
  [...lines].forEach((line, i) => {
    const indexes = [...line.matchAll(/[\*]/g)].map((x) => x.index);
    if (indexes.length < 1) return;

    indexes.forEach((sign) => {
      const adjacent = [];
      for (let dx = -1; dx <= 1; dx++) {
        try {
          const matches = lines[i + dx].matchAll(/([0-9]+)/g);
          for (let x of matches) {
            if (x.index + x[0].length - 1 < sign - 1) continue;
            if (x.index > sign + 1) continue;

            adjacent.push(Number(x[0]));
          }
        } catch {}
      }
      if (adjacent.length !== 2) return;

      total += adjacent.reduce((a, b) => a * b);
    });
  });
  console.log(total);
});

// 467835 too low
// 73201705
