const fs = require("fs");

fs.readFile("./day1/data.txt", "utf8", (_, data) => {
  let total = 0;

  data.split("\n").forEach((line) => {
    const numbers = [...line.matchAll(/[0-9]/g)].map((e) => e[0]);

    const number = 10 * numbers[0] + Number(numbers.at(-1));
    total += number;
  });

  return console.log(total);
});

// * 56108
