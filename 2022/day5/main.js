const { statSync } = require("fs");
const fs = require("fs/promises");

const TEST_INPUT = [
  `    [D]    
[N] [C]    
[Z] [M] [P]
1   2   3  `,
  `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`
]

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    data = data.split("\n\n")
    let stacks = convertBoxesToArray(data[0])
    let instructions = convertInstructionToNumbers(data[1])
    // let stacks = convertBoxesToArray(TEST_INPUT[0])
    // let instructions = convertInstructionToNumbers(TEST_INPUT[1])
    stacks = executeInstructions(instructions, stacks, 9001);
    // stacks = executeInstructions(instructions, stacks, 9000);
    let lastLetter = stacks.map(stack => stack.at(-1)).join("")
    console.log(lastLetter);
  })

function convertBoxesToArray(data) {
  data = data.split("\n")
  let nbrStacks = Number(data.at(-1).trimEnd().match(/(\d+)+$/gm))
  data.pop()
  const stacks = Array.from(Array(nbrStacks), () => new Array())
  data.forEach(element => {
    let crates = element.matchAll(/[A-Z]/g)
    for (let crate of crates) {
      let oddIndex = (crate.index+1)/2
      let i = oddToIndex(oddIndex)
      stacks[i-1].splice(0, 0, crate[0])
    }
    
  });
  return stacks;
}

/**
 * 
 * Gives the index of an odd number as if we listed odd numbers in a list
 * 
 * @param oddIndex
 * 
 * @returns the odd number indexed in 1, 2, 3, ..., n, n+1
 * 
 */

function oddToIndex(oddIndex) {
  return (oddIndex-(((oddIndex-1)/2)))
}

function convertInstructionToNumbers(data) {
  data = data.split("\n");
  return data.map(line => {
    let matches = line.matchAll(/\d+/g);
    return [...matches].map(m => Number(m[0]));
  })

}

function executeInstructions(instructions, stacks, model) {
  instructions.forEach(line => {
    let stackFrom = stacks[line[1]-1]
    let slice = stackFrom.slice(stackFrom.length-line[0])

    if (model == 9000) {
      slice = slice.reverse()
    }

    stacks[line[2]-1].push(...slice)
    stackFrom.splice(stackFrom.length-line[0], line[0])
  });
  return stacks
}

// WCZTHTMPS