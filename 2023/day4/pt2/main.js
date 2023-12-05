const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "../data.txt"), "utf-8", (_, data) => {
fs.readFile(path.join(__dirname, "../test-data.txt"), "utf-8", (_, data) => {
  let total = 0;

  data = data.split("\n");

  getAllWinners(0, data, store);

  console.log(total);
});

function getAllWinners(current, data, store) {
  // number of cards that this card generates + itself
  let value = 0;

  if (!store[current]) {
    let lineTotal = 0;
    line();
    const [winners, numbers] = line
      .split(": ")
      .at(-1)
      .split(" | ")
      .map((x) => [...x.matchAll(/[0-9]+/g)].map((y) => y[0]));

    winners.forEach((n) => {
      if (!numbers.includes(n)) return;

      lineTotal++;
    });
    store[current] = lineTotal + 1;
  } else {
    value = store[current];
  }

  return getAllWinners(current + 1, store);
}

