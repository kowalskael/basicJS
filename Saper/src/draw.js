import { Board } from './Board';

export function draw(boardContainer) {

    for (let i = 0; i < Board.length; i++) {
        const rows = document.createElement("div");
        boardContainer.append(rows);
        for (let j = 0; j < Board[i].length; j++) {
            const cols = document.createElement("div");
            rows.append(cols);
            cols.classList.add(Board[i][j].state);
            if (Board[i][j].fill > 0 && Board[i][j].fill < 9) {
                if (Board[i][j].state === 'revealed' || Board[i][j].state === 'number') {
                    cols.innerHTML = Board[i][j].fill;
                }
            }
            if (Board[i][j].fill === 9) {
                if (Board[i][j].state === 'bomb') {
                    cols.innerHTML = 'B';
                }

            }
        }
    }
}