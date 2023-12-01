// 
// !! Dropped
// 


const fs = require("fs/promises");

let path = "./data.txt"
// let path = "./test.txt"
// 48381165

let dirs = {}
let tot = 0

fs.readFile(path, { encoding: 'utf8' })
  .then(data => {
    data = data.split("\n")
    // console.log(data);
    data = arrangeData(data)
    getDir("/", data);
    Object.values(dirs).forEach(x=>tot+=x<=100000?x:0)
    console.log(tot);
  })

function arrangeData(data) {
  let currentDir = null;
  let content = {}
  let temp = []
  data.forEach(line => {
    if (line.includes("$ cd ")) {
      if (temp.length>0) {
        content[currentDir] = temp
        temp = []
      }
      currentDir = line.split(" ").at(-1)
      if (currentDir != "..") return
      currentDir = null
      return
    }

    if (line.includes("$")) return
    temp.push(line)
  });
  if (temp.length>0) {
    content[currentDir] = temp
  }
  return content
}


function getDir(dir, data) {
  if (dirs[dir]) return dirs[dir]

  let total = 0;
  data[dir].forEach(line => {
    if (line.includes("dir")) {
      total += getDir(line.split(" ").at(-1), data);
      return
    }
    total += Number(line.split(" ")[0])
  })
  dirs[dir] = total

  return total
}

// ! 18143709 >
// ! 14187980 >
// ! 575435   <
// ! 419090   ?