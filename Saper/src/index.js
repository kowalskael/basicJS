import { Board } from './Board';
import { DOM } from './DOM';

window.oncontextmenu = (e) => {
	e.preventDefault();
}

document.getElementById("play").style.display = "none";

document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // game menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER
	const time = document.getElementById("timer");

	const rows = document.getElementById("width").value;
	const columns = document.getElementById("height").value;
	const numBombs = document.getElementById("bombNums").value;

	let boardTest = new Board(columns, rows);
	let boardDraw = new DOM(boardTest, document.getElementById('board'));

	// draw bombs after first click
	let clickCount = 0;
	document.getElementById("board").addEventListener('click', () => {
		if (clickCount === 0) {
			boardTest.drawBombs(numBombs);
			console.log(boardTest);
		}
		clickCount++;
	});

	console.log(boardDraw);

	boardDraw.update();

	if (boardTest.isLose()) {
		// gameover
	} else if (boardTest.isWin()) {
		// winner
	}

};



