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

  data = data.filter(({from, to}) => {
    return from[0] == to[0]
     || from[1] == to[1]
     || Math.abs(from[0] - to[0]) == Math.abs(from[1] - to[1])
  })
  console.log('filtered input:', data)

  const covered = {}
  data.forEach(line => mark(covered, line))
  console.log('result:', calculate(covered))
}

function mark(covered, {from, to}) {
  console.log('from: %O, to:%O', from, to)
  getCoordinates(from, to)
    .forEach(([i, j]) => {
      const key = i + ',' + j
      if (!covered[key]) {
        covered[key] = 1
      } else {
        covered[key]++
      }
    })
  print(covered)
}

function getCoordinates([x1, y1], [x2, y2]) {
  let xStep, yStep 

  if (x1 < x2) {
    xStep = 1
  } else if (x1 == x2) {
    xStep = 0
  } else {
    xStep = -1
  }

  if (y1 < y2) {
    yStep = 1
  } else if (y1 == y2) {
    yStep = 0
  } else {
    yStep = -1
  }

  const result = []
  let currentX = x1, currentY = y1
  do {
    result.push([currentX, currentY])
    currentX += xStep
    currentY += yStep
  } while(currentX != x2 || currentY != y2)
  result.push([currentX, currentY])
  console.log('getCoordinates:', result)
  return result
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