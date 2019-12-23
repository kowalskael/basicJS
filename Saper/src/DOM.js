// create DOM representation of board
export class DOM {

    constructor(board, boardContainer) {

        this.board = board;

        for (let row = 0; row < this.board.board.length; row += 1) {
            const rows = document.createElement("div");
            boardContainer.append(rows);
            for (let col = 0; col < this.board.board[row].length; col += 1) {
                const cols = document.createElement("div");
                rows.append(cols);
                cols.classList.add(this.board.board[row][col].state);
                this.board.board[row][col].element = cols;

                // fire boardCheck on element click
                this.board.board[row][col].element.addEventListener('click', () => {
                    this.board.boardCheck(row, col);
                    console.log(this.board);
                })
            }
        }


    }

    update() {

        for (let row = 0; row < this.board.board.length; row += 1) {
            for (let col = 0; col < this.board.board[row].length; col += 1) {

                // update changes made on board
                // color, state, numbers and strings

                // if user expose empty square, change class to revealed
                if (this.board.board[row][col].state === 'revealed') {
                    if (this.board.board[row][col].fill === 0) {
                        this.board.board[row][col].state = 'revealed';
                    }
                    if (this.board.board[row][col].fill > 0 && this.board.board[row][col].fill < 9) {
                        this.board.board[row][col].element.innerHTML = this.board.board[row][col].fill;
                        this.board.board[row][col].element.style.background = 'darkgray';
                    }
                    if (this.board.board[row][col].fill === 9) {
                        this.board.board[row][col].element.innerHTML = 'B';
                        this.board.board[row][col].element.style.background = 'red';
                    }

                }

            }
        }

    }
}
