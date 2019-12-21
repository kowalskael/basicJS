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
    for (let row = 0; row < width; row++) {
      board[row] = [];
      for (let col = 0; col < height; col++) {
        board[row][col] = { fill: 0, state: 'hidden' };
      }
    }
  }

  drawBombs(numBombs) {
    // drawing bombs
    for (let bomb = 0; bomb <= numBombs; bomb += 1) {
      do {
        const row = Math.floor(Math.random() * board.length);
        const col = Math.floor(Math.random() * board[row].length);
        board[row][col].fill = 9;
      }
      while (board.find(index => index.fill === 9));
    }

    // assign numbers
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {

        let numberOfNeighbourBombs = 0;
        if (board[row][col].fill === 9) continue; // ignore elements with bombs

        for (let check = 0; check < checkId.length; check += 1) {

          let dir = checkId[check];

          if (this.isInBounds(board, row + dir.row, col + dir.col)) {
            if (board[row + dir.row][col + dir.col].fill === 9) {
              numberOfNeighbourBombs += 1;
            }
          }

          board[row][col].fill = numberOfNeighbourBombs;
        }
      }
    }

    this.board = board;
  }

  isInBounds = (row, col) => row >= 0 && row >= 0 && col < this.board.length && col < this.board[row].length;

// play
  boardCheck(row, col) {
    // click on empty
    if (this.board[row][col].fill === 0 && this.board[row][col].state === 'hidden') {

      this.board[row][col].state = 'revealed'; // change state on clicked element

      for (let check = 0; check < checkId.length; check += 1) { // check neighbours

        let dir = checkId[check];

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
    if (this.board[row][col].fill === 9) {
      for (let rows = 0; rows < this.board.length; rows++) {
        for (let cols = 0; cols < this.board[rows].length; cols++) {
          this.board[rows][cols].state = 'revealed'; // reveal all elements of board
          if (this.board[rows][cols].fill === 9) {
            this.board[rows][cols].state = 'revealed' && 'bomb'; // change color
          }
          if (this.board[rows][cols].fill > 0 && this.board[rows][cols].fill <= 8) {
            this.board[rows][cols].state = 'revealed' && 'number'; // change color
          }
        }
      }
    }
  }

  draw(boardContainer) {
    // const boardContainer = document.getElementById('board');

    for (let i = 0; i < this.board.length; i++) {
      let rows = document.createElement("div");
      boardContainer.append(rows);
      for (let j = 0; j < this.board[i].length; j++) {
        let cols = document.createElement("div");
        rows.append(cols);
        cols.classList.add(this.board[i][j].state);
        if (this.board[i][j].fill > 0 && this.board[i][j].fill < 9) {
          if (this.board[i][j].state === 'revealed' || this.board[i][j].state === 'number') {
            cols.innerHTML = this.board[i][j].fill;
          }
        }
        if (this.board[i][j].fill === 9) {
          if (this.board[i][j].state === 'bomb') {
            cols.innerHTML = 'B';
          }

        }
      }
    }
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

        let dir = checkId[check];

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
