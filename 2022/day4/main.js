const fs = require("fs/promises");

const TEST_INPUT = [
  "2-4,6-8",
  "2-3,4-5",
  "5-7,7-9",
  "2-8,3-7",
  "6-6,4-6",
  "2-6,4-8",
  "9-15,8-19"
]

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    data = data.split("\n")
    // console.log(getOverlaps(TEST_INPUT))
    console.log(getOverlaps(data))
  })

function getContain(pairs) {
  let total = 0;
  pairs.forEach(pair => {
    let elf = pair.split(",")
    elf = elf.map(sections => sections.split("-").map(section => Number(section)))
    let res = elf[0].map((section, index) => {
      return Math.sign(section - elf[1][index])
    })
    console.log(res);
    if (res.includes(0)) {
      total++
    } else if (res.reduce((a,b)=>a+b) == 0) {
      total++
    }
  });
  return total
}

// ! 389
// ! 607
// * 605

function getOverlaps(pairs) {
  let total = 0;
  pairs.forEach(pair => {
    let elf = pair.split(",")
    elf = elf.map(sections => sections.split("-").map(section => Number(section)))
    let biggest = elf[0].reduce((a,b)=>b-a) > elf[1].reduce((a,b)=>b-a) ? 0: 1;
    let smallest = Number(!biggest)
    let inRange = elf[smallest].map((section) => {
      return section>=elf[biggest][0] && section<=elf[biggest][1]
    })
    // console.log(inRange);
    if (inRange.includes(true)) {
      total++
    }
  });
  return total
}

// ! 765
// * 914