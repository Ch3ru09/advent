const fs = require('fs')

function main() {
  let ages = fs.readFileSync('6.input', {encoding: 'utf-8'})
    .split(',')
    .map(age => parseInt(age))
  console.log('Initial state:', ages)

  let sum = 0
  ages.forEach(age => {
    sum += countCacheAble(age, 256)
  })

  console.log(sum)
}

function count(age, days) {
  if (days <= age) {
    console.log('>> age: %d', age - days)
    return 1
  }

  const restDays = days - age - 1
  return countCacheAble(6, restDays) + countCacheAble(8, restDays)
}

const CACHE = {}

function countCacheAble(age, days) {
  const cacheKey = age + '@' + days
  if (CACHE[cacheKey]) {
    return  CACHE[cacheKey]
  }

  const result = count(age, days)
  CACHE[cacheKey] = result
  return result
}

main()