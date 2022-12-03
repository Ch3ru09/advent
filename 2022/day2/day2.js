const fs = require("fs/promises");

const REFERENCE = {A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3}

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    let test = ["A Y", "B X", "C Z"]

    data = data.split("\r\n")
    // console.log(getScore(data))
    console.log(getScoreModified(data))
  })

function getScore(data) {
  let total = 0
  data.forEach(sets => {
    let score = 0;
    let [opponent, us] = sets.split(" ")
    opponent = REFERENCE[opponent]
    us = REFERENCE[us]
    score += us

    if (opponent+1 == us) {
      score += 6
    }
    if (opponent == 3 && us == 1) {
      score += 6
    }
    if (opponent == us) {
      score += 3
    }
    total += score
  });
  return total
}

function getScoreModified(data) {
  let total = 0
  data.forEach(sets => {
    let score = 0;
    let [opponent, us] = sets.split(" ")
    opponent = REFERENCE[opponent]
    us = REFERENCE[us]
    score += (us-1)*3
    let played = opponent+(us-2)
    played = played < 1? 3: played
    played = played > 3? 1: played
    score += played

    total += score
  });
  return total
}

// 13187
// 11420
// 12881