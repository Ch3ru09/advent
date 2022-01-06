const fs = require('fs')

const BOARD_SIZE = 5

function initMarkedBoard() {
  const result= []
  for (let i = 0; i < BOARD_SIZE; i++) {
    const row = []
    for(let j = 0; j < BOARD_SIZE; j++) {
      row.push(0)
    }
    result.push(row)
  }
  return result
}

function initBoards(data) {
  const boards = []
  for (let i = 0; i < data.length; i += BOARD_SIZE) {
    const board = []
    for (let j = 0; j < BOARD_SIZE; j++) {
      const row = []
      for (let k = 0; k < BOARD_SIZE; k++) {
        const cell = data[i + j].substring(k * 3, (k + 1) * 3)
        row.push(parseInt(cell))
      }
      board.push(row)
    }
    boards.push({board, marked: initMarkedBoard()})
  }
  console.log('boards:', boards)
  return boards
}

function find(board, num) {
  for (let i = 0; i < board.length; i++) {
    const j = board[i].indexOf(num)
    if (j >= 0) {
      return [i, j]
    }
  }
  return []
}

function mark(num, board, marked) {
  console.log('mark: num: %d, board: %O, marked: %O', num, board, marked)
  const [x, y] = find(board, num)
  if (x == undefined) {
    return []
  }

  console.log('found:', [x, y])
  marked[x][y] = 1
  console.log('marked:', marked)
  return [x, y]
}

function checkWin(marked, [x, y]) {
  console.log('checkWin: marked: %O, coordinate: %O', marked, [x, y])
  let result = true
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (marked[x][i] == 0) {
      result = false
      break
    }
  }
  if (result) {
    return true
  }

  for (let i = 0; i < BOARD_SIZE; i++) {
    if (marked[i][y] == 0) {
      return false
    }
  }
  return true
}

function isBingo(num, {board, marked}) {
  const [x, y] = mark(num, board, marked)
  if (x != undefined && checkWin(marked, [x, y])) {
    console.log('Bingo! num: %d, board: %O, marked: %O', num, board, marked)
    return true
  }
  return false
}

function lastWin(numbers, boards) {
  let restBoards = boards
  while (restBoards.length > 0) {
    const num = numbers.shift()
    const tmpBoards = restBoards.filter((board) => {
      return !isBingo(num, board)
    })
    if (tmpBoards.length == 0) {
      return [num, restBoards[restBoards.length - 1]]
    }
    restBoards = tmpBoards
  }
}

function calculateResult(num, {board, marked}) {
  let sum = 0
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (marked[i][j] == 0) {
        sum += board[i][j]
      }
    }
  }
  return sum * num
}

function main() {
  const data = fs.readFileSync('4.input', {encoding: 'utf-8'})
    .split('\n')
    .filter(line => line.length > 0)
  
  const numbers = data.shift().split(',').map(num => parseInt(num))
  console.log('numbers:', numbers)
  const boards = initBoards(data)
  const [num, board] = lastWin(numbers, boards)
  console.log(calculateResult(num, board))
}

main()
