import { Board } from './Board';

document.getElementById("play").style.display = "none";

document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // game menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER
	const time = document.getElementById("timer");

	const rows = document.getElementById("width").value;
	const columns = document.getElementById("height").value;
	const numBombs = document.getElementById("bombNums").value;

	//const board = createBoard(rows, columns, numBombs);
	//console.table(board);

	//console.log(JSON.stringify(board));

	let boardTest = new Board(columns, rows);
	boardTest.board = [[{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":5,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}]];
	boardTest.boardCheck(6, 9);
	console.table(boardTest.board);
	boardTest.draw(document.getElementById('board'));

	boardTest = new Board(columns, rows);
	boardTest.drawBombs(numBombs);
	boardTest.boardCheck(2, 2);
	boardTest.draw(document.getElementById('board'));
};



