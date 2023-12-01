const fs = require("fs/promises");

let path = "./data.txt"
// let path = "./test.txt"

fs.readFile(path, { encoding: 'utf8' })
  .then(data => {
    data = data.split("\n")
    
  })