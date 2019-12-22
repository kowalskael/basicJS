import { Board } from './Board';
import { createDOM } from './DOM';

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
	boardTest.boardCheck(2, 2);
	createDOM(document.getElementById('board'), boardTest);

	if (boardTest.isLose()) {
		// gameover
	} else if (boardTest.isWin()) {
		// winner
	}

};



