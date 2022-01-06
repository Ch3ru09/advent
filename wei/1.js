const fs = require('fs')

const data = fs.readFileSync('1.input', {encoding: 'utf-8'})
  .split('\n')
  .map(d => parseInt(d))

let previous = data[0]
let result = 0
data.forEach(current=> {
  if (current > previous) {
    console.log(current + ' (i)')
    result++
  } else {
    console.log(current + ' (d)')
  }
  previous = current 
})

console.log(result)

