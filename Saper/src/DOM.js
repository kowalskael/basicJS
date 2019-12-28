// create DOM representation of board
export class DOM {

    constructor(board, boardContainer, firstClick, bombs) {

        for (let row = 0; row < board.board.length; row += 1) {

            const rows = document.createElement("div");
            boardContainer.append(rows);

            for (let col = 0; col < board.board[row].length; col += 1) {
                const cols = document.createElement("div");
                rows.append(cols);
                board.board[row][col].element = cols;

                // fire boardCheck on element click
                board.board[row][col].element.addEventListener('click', () => {

                    // if this was first click and board.isLose()
                    if (firstClick && board.board[row][col].fill === 9) {
                        firstClick = true;

                        do { // if firstClick is bomb, drawBombs again
                            // clear previous board fill & state
                            for (let prevRow = 0; prevRow < board.board.length; prevRow += 1) {
                                for (let prevCol = 0; prevCol < board.board[prevRow].length; prevCol += 1) {
                                    board.board[prevRow][prevCol].fill = 0;
                                    board.board[prevRow][prevCol].state = 'hidden';
                                }
                            }

                            board.drawBombs(bombs);
                            board.boardCheck(row, col);
                        } while (this.board.isLose());

                        this.update();
                        return firstClick = false;
                    }

                    board.boardCheck(row, col);
                    this.update();
                })
            }
        }

        this.board = board;

    }

    update() {

        for (let row = 0; row < this.board.board.length; row += 1) {
            for (let col = 0; col < this.board.board[row].length; col += 1) {

                this.board.board[row][col].element.classList.add(this.board.board[row][col].state);

                // update changes made on board
                // color, state, numbers and strings

                // if user expose empty square, change state to revealed
                if (this.board.board[row][col].fill === 0 && this.board.board[row][col].state === 'revealed') {
                    this.board.board[row][col].state = 'revealed';
                    this.board.board[row][col].element.style.background = '#ffcc00';
                }

                // if user expose empty square, change state to revealed and assign number
                if (this.board.board[row][col].fill > 0 && this.board.board[row][col].fill < 9) {
                    if (this.board.board[row][col].state === 'revealed') {
                        this.board.board[row][col].element.innerHTML = this.board.board[row][col].fill;
                        this.board.board[row][col].element.style.background = '#c300ff';
                    }
                }

                // if user expose empty square, change state to revealed and assign string
                if (this.board.board[row][col].fill === 9 && this.board.board[row][col].state === 'revealed') {
                    this.board.board[row][col].element.innerHTML = 'B';
                    this.board.board[row][col].element.style.background = '#ff0055';
                }

            }
        }

    }
}
