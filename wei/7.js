const fs = require('fs')

function main() {
  let positions = fs.readFileSync('7.input-example', {encoding: 'utf-8'})
    .split(',')
    .map(p => parseInt(p))
  console.log(positions)

  const [min, max] = getRange(positions)
  const result = search(
    {value: min, fuel: calculate(positions, min)},
    {value: max, fuel: calculate(positions, max)},
    positions)
  console.log(result)
}

function getRange(positions) {
  return [Math.min(...positions), Math.max(...positions)]
}

function search(min, max, positions) {
  // TODO
}

function calculate(positions, target) {
  return positions.reduce((pv, cv) => {
    return pv + Math.abs(cv - target)
  })
}

main()