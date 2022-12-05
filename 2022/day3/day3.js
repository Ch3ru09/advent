const fs = require("fs/promises");

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    data = data.split("\r\n")
    let test = ["vJrwpWtwJgWrhcsFMMfFFhFp", 
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", 
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw"]
    // console.log(getSumPriorities(data))
    console.log(getPrioritiesFor3Elves(data))
  })

function getSumPriorities(data) {
  let total = 0;
  data.forEach(rucksack => {
    for (let i = 0; i < rucksack.length/2; i++) {
      let character = rucksack[i]
      if (rucksack.lastIndexOf(character) >= rucksack.length/2) {
        let priority = character.charCodeAt(0)-96;
        if (priority < 0) {
          // because in ascii, uppercase is lower than lowercase
          priority += 31+27
        }
        total += priority
        break
      }
    }
  })
  return total
}

function getPrioritiesFor3Elves(data) {
  let chunkSize = 3
  let total = 0
  for (let i = 0; i < data.length; i += chunkSize) {
    let currentChunk = data.slice(i, i+chunkSize)
    currentChunk = currentChunk.map(container => {
      return Array.from(new Set(container)).join('')
    })
    currentChunk[0].split("").forEach(letter => {
      if (!currentChunk[1].includes(letter)) return
      if (!currentChunk[2].includes(letter)) return
      
      let priority = letter.charCodeAt(0)-96;
      if (priority < 0) {
        // because in ascii, uppercase is lower than lowercase
        priority += 31+27
      }
      total += priority
    })
  }
  return total
}