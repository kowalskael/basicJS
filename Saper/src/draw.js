import { Board } from './Board';

export function draw(boardContainer) {

    for (let i = 0; i < Board.board.length; i++) {
        const rows = document.createElement("div");
        boardContainer.append(rows);
        for (let j = 0; j < Board.board[i].length; j++) {
            const cols = document.createElement("div");
            rows.append(cols);
            cols.classList.add(Board.board[i][j].state);
            if (Board.board[i][j].fill > 0 && Board.board[i][j].fill < 9) {
                if (Board.board[i][j].state === 'revealed' || Board.board[i][j].state === 'number') {
                    cols.innerHTML = Board.board[i][j].fill;
                }
            }
            if (Board.board[i][j].fill === 9) {
                if (Board.board[i][j].state === 'bomb') {
                    cols.innerHTML = 'B';
                }

            }
        }
    }
}