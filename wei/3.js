const fs = require('fs')
const {binaryToInt} = require('./utils')

const data = fs.readFileSync('3.input', {encoding: 'utf-8'})
  .split('\n')

const lineCount = data.length

const result = []

data.forEach(line => {
  console.log(line)
  for (let i = 0; i < line.length; i++) {
    if (result[i] == undefined) {
      result[i] = 0
    }
    result[i] += parseInt(line[i])
  }
})

const gammaRate = [], epsilonRate = []

for (let i = 0; i < result.length; i++) {
  if (result[i] > (lineCount / 2)) {
    gammaRate[i] = 1
    epsilonRate[i] = 0
  } else {
    gammaRate[i] = 0
    epsilonRate[i] = 1
  }
}

const gammaRateValue = binaryToInt(gammaRate)
const epsilonRateValue = binaryToInt(epsilonRate)
console.log('gammaRateValue:', gammaRateValue)
console.log('epsilonRateValue:', epsilonRateValue)
console.log('result:', gammaRateValue * epsilonRateValue)
