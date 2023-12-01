const fs = require("fs/promises");

let path = "./data.txt"
// let path = "./test.txt"

let directorySizes = {}

fs.readFile(path, { encoding: 'utf8' })
  .then(data => {
    data = data.split("\n")
    data = arrangeData(data)
    getDirs("/", data)
    let total = 0
    Object.values(directorySizes).forEach(x=>total+=(x<=100000?x:0))
    console.log(total);
  })

function arrangeData(data) {
  let res = {}
  let currentDir = null
  let buffer = []
  data.forEach(line => {
    if (line.includes("$ cd ")) {
      if (line.includes("..")) return
      if (buffer.length>0) {
        res[currentDir] = buffer
        buffer = []
      }
      currentDir = line.split(" ").at(-1);
      return
    }
    if (line.includes("$ ls")) {
      return
    }
    if (line.includes("dir ")) {
      buffer.push(line.split(" ").at(-1))
      return
    }

    buffer.push(Number(line.split(" ")[0]))
  });
  if (buffer.length>0) {
    res[currentDir] = buffer
  }
  return res
}

function getDirs(dir, data) {
  if (directorySizes[dir]) return directorySizes[dir]

  let total = 0;

  data[dir].forEach(content => {
    if (typeof content == "string") {
      return total += getDirs(content, data)
    }
    total += content
  })

  directorySizes[dir] = total

  return total
}