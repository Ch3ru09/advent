const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "./test-data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "../data.txt"), "utf-8", (_, data) => {
  let total = 0;
  const contained = {
    red: 12,
    green: 13,
    blue: 14,
  };

  data.split("\r\n").forEach((line, index) => {
    for (let set of line.split(": ").at(-1).split("; ")) {
      for (let color of set.split(", ")) {
        color = color.split(" ");
        if (color[0] > contained[color.at(-1)]) return;
      }
    }
    total += index + 1;
  });
  console.log(total);
});

// 2217 too high
// 2156
