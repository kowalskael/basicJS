// array for checking neighbours
const checkId = [
  { row: -1, col: -1 }, { row: -1, col: 0 }, { row: -1, col: +1 },
  { row: 0, col: -1 }, { row: 0, col: +1 },
  { row: +1, col: -1 }, { row: +1, col: 0 }, { row: +1, col: +1 }];

export class Board {

  constructor(width, height) {

    //create array
    const board = [];

    // create array with objects
    for (let row = 0; row < height; row++) {
      board[row] = [];
      for (let col = 0; col < width; col++) {
        board[row][col] = { fill: 0, state: 'hidden' };
      }
    }

    this.board = board;
  }

  drawBombs(numBombs) {

    // drawing bombs
    for (let bomb = 0; bomb <= numBombs; bomb += 1) {
      do {
        const row = Math.floor(Math.random() * this.board.length);
        const col = Math.floor(Math.random() * this.board[row].length);
        this.board[row][col].fill = 9;
      }
      while (this.board.find(index => index.fill === 9));
    }

    // assign numbers
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {

        let numberOfNeighbourBombs = 0;
        if (this.board[row][col].fill === 9) continue; // ignore elements with bombs

        for (let check = 0; check < checkId.length; check += 1) {

          const dir = checkId[check];

          if (this.isInBounds(row + dir.row, col + dir.col)) {
            if (this.board[row + dir.row][col + dir.col].fill === 9) {
              numberOfNeighbourBombs += 1;
            }
          }

          this.board[row][col].fill = numberOfNeighbourBombs;
        }
      }
    }
  }

  isInBounds(row, col) {
    return row >= 0 && col >= 0 && row < this.board.length && col < this.board[row].length;
  }

  // play
  boardCheck(row, col) {

    // click on empty
    if (this.board[row][col].fill === 0 && this.board[row][col].state === 'hidden') {

      this.board[row][col].state = 'revealed'; // change state on clicked element

      for (let check = 0; check < checkId.length; check += 1) { // check neighbours

        const dir = checkId[check];

        if (this.isInBounds(row + dir.row, col + dir.col)) { // pass valid index

          if (0 < this.board[row + dir.row][col + dir.col].fill && this.board[row + dir.row][col + dir.col].fill <= 8 && this.board[row][col].state === 'hidden') // if neighbours are numbers, reveal them
            this.board[row + dir.row][col + dir.col].state = 'revealed';

          if (this.board[row + dir.row][col + dir.col].fill === 0 && this.board[row][col].state === 'hidden') // if neighbour is 0, reveal it and start userClicks() on it
            this.board[row + dir.row][col + dir.col].state = 'revealed';
          this.boardCheck(row + dir.row, col + dir.col)

        }
      }
    }

    // click on numbers
    if (this.board[row][col].fill > 0 && this.board[row][col].fill <= 8 && this.board[row][col].state === 'hidden') {
      this.board[row][col].state = 'revealed';
    }

    // click on bomb
    if (this.board[row][col].fill === 9 && this.board[row][col].state === 'hidden') {
      for (let rows = 0; rows < this.board.length; rows++) {
        for (let cols = 0; cols < this.board[rows].length; cols++) {
          this.board[rows][cols].state = 'revealed'; // reveal all elements of board
        }
      }
    }
  }

  isLose() {

    // true if any board element with bomb is revealed
    for (let row = 0; row < this.board.length; row += 1) {
      for (let col = 0; col < this.board[row].length; col += 1) {

        if (this.board[row][col].fill === 9 && this.board[row][col].state === 'revealed') {
          return true;
        }
      }
    }
    return false;
  }

  isWin() {

    // true if all elements without bombs are revealed
    let numberOfNoBombs = 0;
    let numberOfNoBombsRevealed = 0;

    for (let row = 0; row < this.board.length; row += 1) {
      for (let col = 0; col < this.board[row].length; col += 1) {

        if (this.board[row][col].fill !== 9) {
          numberOfNoBombs+= 1;
        }

        if (this.board[row][col].fill !== 9 && this.board[row][col].state === 'revealed') {
          numberOfNoBombsRevealed += 1;
        }
      }
    }

    return numberOfNoBombs === numberOfNoBombsRevealed;
  }

  // szkic kolejnych funkcji
  flagBoard(row, col) {

    // click on every element that is hidden
    if (this.board[row][col].state === 'hidden') {
      this.board[row][col].state = 'flagged';
    }

    if (this.board[row][col].state === 'flagged') {
      this.board[row][col].state = 'hidden';
    }

  }

  revealWithFlags(row, col) {

    // click on element with number
    if (this.board[row][col].fill > 0 && this.board[row][col].fill <= 8 && this.board[row][col].state === 'revealed') {

      for (let check = 0; check < checkId.length; check += 1) { // check neighbours

        const dir = checkId[check];

        if (row + dir.row >= 0 && row + dir.row < this.board.length && col + dir.col >= 0 && col + dir.col < this.board.length) { // pass valid index

          if (this.board[row + dir.row][col + dir.col].fill === 9 && this.board[row + dir.row][col + dir.col].state === 'flagged') {
            // reveal the rest of neighbours, recursion
          }

          if (this.board[row + dir.row][col + dir.col].fill === 9 && this.board[row + dir.row][col + dir.col].state === 'hidden') {
            // game over
          }
        }

      }
    }
  }
}
