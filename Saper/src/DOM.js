// create DOM representation of board
export class DOM {

    constructor(board, boardContainer, firstClick, numBombs) {

        this.board = board;

        for (let row = 0; row < this.board.board.length; row += 1) {
            const rows = document.createElement("div");
            boardContainer.append(rows);
            for (let col = 0; col < this.board.board[row].length; col += 1) {
                const cols = document.createElement("div");
                rows.append(cols);
                this.board.board[row][col].element = cols;

                // fire boardCheck on element click
                this.board.board[row][col].element.addEventListener('click', () => {

                    firstClick = true;

                    // if this was first click and board.isLose()
                    if ( firstClick === true && this.board.isLose()) { // if firstClick is bomb, drawBombs again
                        do {
                            this.board.drawBombs(numBombs); // draw bombs
                            this.board.boardCheck(row, col);
                        } while (this.board.isLose()); // until false

                        firstClick = false;
                    }

                    this.board.boardCheck(row, col);
                    this.update();
                    console.log(this.board);
                })
            }
        }


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
