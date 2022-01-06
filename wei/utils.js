exports.binaryToInt = function(binaryArray) {
  let result = 0
  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] == '1') {
      result += 2 ** (binaryArray.length - 1 - i)
    }
  }
  return result
}

