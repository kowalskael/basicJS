// create DOM representation of board
export class DOM {

    constructor(board, boardContainer, rows, cols) {
        for (let i = 0; i < board.board.length; i++) {
            rows = document.createElement("div");
            boardContainer.append(rows);
            for (let j = 0; j < board.board[i].length; j++) {
                cols = document.createElement("div");
                rows.append(cols);
                cols.classList.add(board.board[i][j].state);
            }
        }

        this.board = board;
        this.cols = cols;
    }

    update() {
        for (let i = 0; i < this.board.board.length; i++) {
            for (let j = 0; j < this.board.board[i].length; j++) {

                if (this.board.board[i][j].fill > 0 && this.board.board[i][j].fill < 9) {
                    if (this.board.board[i][j].state === 'revealed' || this.board.board[i][j].state === 'number') {
                        this.cols.innerHTML = this.board.board[i][j].fill;
                    }
                }
                if (this.board.board[i][j].fill === 9) {
                    if (this.board.board[i][j].state === 'bomb') {
                        this.cols.innerHTML = 'B';
                    }

                }
            }
        }

    }
}
