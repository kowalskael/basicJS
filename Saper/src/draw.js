export function draw(boardContainer, board) {

    for (let i = 0; i < board.board.length; i++) {
        const rows = document.createElement("div");
        boardContainer.append(rows);
        for (let j = 0; j < board.board[i].length; j++) {
            const cols = document.createElement("div");
            rows.append(cols);
            cols.classList.add(board.board[i][j].state);
            if (board.board[i][j].fill > 0 && board.board[i][j].fill < 9) {
                if (board.board[i][j].state === 'revealed' || board.board[i][j].state === 'number') {
                    cols.innerHTML = board.board[i][j].fill;
                }
            }
            if (board.board[i][j].fill === 9) {
                if (board.board[i][j].state === 'bomb') {
                    cols.innerHTML = 'B';
                }

            }
        }
    }
}