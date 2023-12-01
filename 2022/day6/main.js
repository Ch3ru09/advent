const fs = require("fs/promises");

fs.readFile("./data.txt", { encoding: 'utf8' })
  .then(data => {
    // console.log(getMarker(data, 4))
    console.log(getMarker(data, 14))
  })

function getMarker(data, nberChar) {
  for (let i = 0; i < data.length-nberChar-1; i++) {
    let current = data.slice(i, i+nberChar);
    let finds = [...current.matchAll(/(?:([A-Za-z])(?!.*\1))/g)]
    if (finds.length == nberChar) {
      return i+nberChar
    }
  }
}

// * 1356