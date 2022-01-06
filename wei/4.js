const fs = require('fs')

const BOARD_SIZE = 5

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
    boards.push(board)
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

function initMarkedBoards(count) {
  const result = []
  for (let n = 0; n < count; n++) {
    const markedBoard = []
    for (let i = 0; i < BOARD_SIZE; i++) {
      const row = []
      for(let j = 0; j < BOARD_SIZE; j++) {
        row.push(0)
      }
      markedBoard.push(row)
    }
    result.push(markedBoard)
  }
  return result
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

function bingo(numbers, boards, markedBoards) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    for (let j = 0; j < boards.length; j++) {
      const board = boards[j], markedBoard = markedBoards[j]
      const [x, y] = mark(num, board, markedBoard)
      if (x != undefined && checkWin(markedBoard, [x, y])) {
        console.log('Bingo! num: %d, board: %O, marked: %O', num, board, markedBoard)
        return [num, board, markedBoard]
      }
    }
  }
}

function calculateResult(num, board, marked) {
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

const data = fs.readFileSync('4.input', {encoding: 'utf-8'})
  .split('\n')
  .filter(line => line.length > 0)

const numbers = data.shift().split(',').map(num => parseInt(num))
console.log('numbers:', numbers)
const boards = initBoards(data)
const markedBoards = initMarkedBoards(boards.length)
const [num, board, markedBoard] = bingo(numbers, boards, markedBoards)
console.log(calculateResult(num, board, markedBoard))