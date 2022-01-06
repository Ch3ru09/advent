const fs = require('fs')

let horizontal = 0, depth = 0

fs.readFileSync('2.input', {encoding: 'utf-8'})
  .split('\n')
  .map(line => {
    const [instruction, value] = line.split(' ')
    return {instruction, value: parseInt(value)}
  })
  .forEach(({instruction, value}) => {
    if (!instruction) {
      return
    }
    switch (instruction) {
    case 'forward': horizontal += value; break
    case 'down': depth += value; break
    case 'up': depth -= value; break
    default: throw new Error('Unknown instruction: ' + instruction)
    }
  })

console.log('horizontal: ' + horizontal)
console.log('depth: ' + depth)
console.log('result: ' + horizontal * depth)
