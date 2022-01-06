const fs = require('fs')
const {binaryToInt} = require('./utils')

const data = fs.readFileSync('3.input', {encoding: 'utf-8'})
  .split('\n')
  .filter(line => line.length > 0)

const DATA_LENGTH = data[0].length

function filter(data, filterFunc) {
  let data1 = data, data2
  for (let i = 0; i < DATA_LENGTH; i++) {
    let sum = 0
    data1.forEach(line => {
      sum += parseInt(line[i])
    })
    if (filterFunc(sum, data1)) {
      data2 = data1.filter(line => line[i] == '1')
    } else {
      data2 = data1.filter(line => line[i] == '0')
    }
    data1 = data2
    if (data1.length == 1) {
      break
    }
  }
  return data1[0]
}

const oxygenGeneratorRating = filter(data, (sum, data) => sum >= data.length / 2)
const CO2ScrubberRating = filter(data, (sum, data) => sum < data.length / 2)
console.log('oxygen generator rating:', oxygenGeneratorRating)
console.log('CO2 scrubber rating:',  CO2ScrubberRating)
console.log('result:', binaryToInt(oxygenGeneratorRating) * binaryToInt(CO2ScrubberRating))
