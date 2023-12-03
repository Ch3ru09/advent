const fs = require("fs");
const path = require("path");

let total = 0;

// fs.readFile(path.join(__dirname, "./test-data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "../data.txt"), "utf-8", (_, data) => {
  data.split("\r\n").forEach((line, index) => {
    const temp = {
      red: 0,
      green: 0,
      blue: 0,
    };

    for (let set of line.split(": ").at(-1).split("; ")) {
      for (let color of set.split(", ")) {
        color = color.split(" ");
        temp[color.at(-1)] = Math.max(color[0], temp[color.at(-1)]);
      }
    }

    total += Object.values(temp).reduce((a, b) => a * b);
  });
  console.log(total);
});

//
