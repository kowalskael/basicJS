import { Board } from './Board';
import { DOM } from './DOM';

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
	boardTest.drawBombs(numBombs);

	let boardDraw = new DOM(boardTest, document.getElementById('board'), true, numBombs);
	console.log(boardDraw.board);

	boardDraw.update();

	if (boardTest.isLose()) {
		// gameover
	} else if (boardTest.isWin()) {
		// winner
	}

};



