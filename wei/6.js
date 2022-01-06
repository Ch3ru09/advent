const fs = require('fs')

function main() {
  let ages = fs.readFileSync('6.input', {encoding: 'utf-8'})
    .split(',')
    .map(age => parseInt(age))
  console.log('Initial state:', ages)

  for (let i = 0; i < 80; i++) {
    ages = addDay(ages)
    console.log(ages)
  }
  console.log(ages.length)
}

function addDay(ages) {
  const news = []
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] == 0) {
      ages[i] = 6
      news.push(8)
    } else {
      ages[i]--
    }
  }
  return ages.concat(news)
}

main()