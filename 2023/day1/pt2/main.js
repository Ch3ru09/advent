const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "../data.txt"), "utf8", (_, data) => {
  let total = 0;

  data.split("\n").forEach((line) => {
    const digits = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    Object.keys(digits).forEach((key) => {
      line = line.replaceAll(key, key + digits[key] + key);
    });

    let numbers = [...line.matchAll(/[0-9]/g)].map((e) => e[0]);

    numbers = numbers.map((x) => {
      return digits[x] != undefined ? digits[x] : Number(x);
    });

    console.log(numbers);
    const number = 10 * numbers[0] + numbers.at(-1);

    total += number;
  });

  console.log(total);
});

// 55648 too low
// 55915 too high
// 55833 incorrect
// 55862 incorrect
// * 55652
