// create DOM representation of board
export function createDOM(boardContainer, board) {

    for (let i = 0; i < board.board.length; i++) {
        const rows = document.createElement("div");
        boardContainer.append(rows);
        for (let j = 0; j < board.board[i].length; j++) {
            const cols = document.createElement("div");
            rows.append(cols);
            cols.classList.add(board.board[i][j].state);
        }
    }

}

// update DOM with changes
export function updateDOM(board) {

}