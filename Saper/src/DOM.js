// create DOM representation of board
export default class DOM {
  firstClick = true;

  constructor(board, boardContainer, bombs) {
    this.board = board;
    this.bombs = bombs;
    for (let row = 0; row < this.board.board.length; row += 1) {
      const rows = document.createElement('div');
      boardContainer.append(rows);

      for (let col = 0; col < this.board.board[row].length; col += 1) {
        const cols = document.createElement('div');
        rows.append(cols);
        cols.setAttribute('data-row', `${row}`);
        cols.setAttribute('data-col', `${col}`);
        const field = this.board.board[row][col];
        field.element = cols;

        // Left click - fires boardCheck on element click
        field.element.addEventListener('click', this.clickHandler);

        // Right click - flag elements
        field.element.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          this.board.flagBoard(row, col);
          this.update();
        });

        // Dblclick fast revealing
        field.element.addEventListener('dblclick', () => {
          // if all bombs in the neighbourhood of the number are flagged
          // reveal with checkBoard(row, col)
          // else reveal bombs which are not flagged
        });
      }
    }
  }

  clickHandler = (event) => {
    const row = event.target.getAttribute('data-row');
    const col = event.target.getAttribute('data-col');
    console.log(row, col);
    // if this was first click and board.isLose()
    if (this.firstClick && this.board.board[row][col].fill === 9) {
      do { // if firstClick is bomb, drawBombs again
        // clear previous board fill & state
        for (let prevRow = 0; prevRow < this.board.board.length; prevRow += 1) {
          for (let prevCol = 0; prevCol < this.board.board[prevRow].length; prevCol += 1) {
            this.board.board[prevRow][prevCol].fill = 0;
            this.board.board[prevRow][prevCol].state = 'hidden';
          }
        }

        this.board.drawBombs(this.bombs);
        this.board.boardCheck(row, col);
      } while (this.board.isLose());

      this.update();
      console.log(this.board);
      this.firstClick = false;
      return;
    }

    this.board.boardCheck(row, col);
    this.update();
    console.log(this.board);
  }

  update() {
    for (let row = 0; row < this.board.board.length; row += 1) {
      for (let col = 0; col < this.board.board[row].length; col += 1) {
        const field = this.board.board[row][col];

        field.element.classList.add(field.state);

        // update changes made on board
        // color, state, numbers and strings

        if (field.state === 'hidden') {
          field.element.classList.add('hidden');
          field.element.classList.remove('flagged');
        }

        // if user expose empty square, change state to revealed
        if (field.fill === 0 && field.state === 'revealed') {
          field.element.classList.add('revealed-empty');
          field.element.classList.remove('hidden');
        }

        // if user expose empty square, change state to revealed and assign number
        if (field.fill > 0 && field.fill < 9) {
          if (field.state === 'revealed') {
            field.element.classList.remove('hidden');
            field.element.classList.add('revealed-number');
            field.element.innerHTML = field.fill;
          }
        }

        // if user expose empty square, change state to revealed and assign string
        if (field.fill === 9 && field.state === 'revealed') {
          field.element.classList.remove('hidden');
          field.element.classList.add('revealed-bomb');
          field.element.innerHTML = 'B';
        }

        if (field.state === 'flagged') {
          field.element.classList.add('flagged');
          field.element.classList.remove('hidden');
        }
      }
    }
  }
}
