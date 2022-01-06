const fs = require('fs')

const BOARD_SIZE = 10

function main() {
  let data = fs.readFileSync('5.input', {encoding: 'utf-8'})
    .split('\n')
    .filter(line => line.length > 0)
    .map(line => {
      const [from, to] = line.split(' -> ')
        .map(coordinate => coordinate.split(',').map(v => parseInt(v)))
      return {from, to}
    })
  console.log('input:', data)

  data = data.filter(({from, to}) => from[0] == to[0] || from[1] == to[1])
  console.log('filtered input:', data)

  const covered = {}
  data.forEach(line => mark(covered, line))
  console.log('result:', calculate(covered))
}

function mark(covered, {from, to}) {
  let fromValue, toValue
  if (from[0] == to[0]) {
    if (from[1] < to[1]) {
      fromValue = from[1]
      toValue = to[1]
    } else {
      fromValue = to[1]
      toValue = from[1]
    }
    for (let i = fromValue; i <= toValue; i++) {
      const key = from[0] + ',' + i
      if (!covered[key]) {
        covered[key] = 1
      } else {
        covered[key]++
      }
    }
  } else {
    if (from[0] < to[0]) {
      fromValue = from[0]
      toValue = to[0]
    } else {
      fromValue = to[0]
      toValue = from[0]
    }
    for (let i = fromValue; i <= toValue; i++) {
      const key = i + ',' + from[1]
      if (!covered[key]) {
        covered[key] = 1
      } else {
        covered[key]++
      }
    }
  }
  console.log('from: %O, to:%O', from, to)
  print(covered)
}

function print(covered) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const key = j + ',' + i
      if (covered[key]) {
        process.stdout.write('' + covered[key])
      } else {
        process.stdout.write('.')
      }
    }
    process.stdout.write('\n')
  }
}

function calculate(covered) {
  return Object.values(covered)
    .filter(v => v >= 2)
    .length
}

main()