import { boardCheck, draw, isInBounds } from './play';

document.getElementById("play").style.display = "none";

document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // game menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER
	const time = document.getElementById("timer");

	const rows = document.getElementById("width").value;
	const columns = document.getElementById("height").value;
	const numBombs = document.getElementById("bombNums").value;

	// array for checking neighbours
	const checkId = [
		{row: -1, col: -1}, {row: -1, col: 0}, {row: -1, col: +1},
		{row: 0, col: -1}, {row: 0, col: +1},
		{row: +1, col: -1}, {row: +1, col: 0}, {row: +1, col: +1}];

	// start
	function createBoard(width, height, numBombs) {

		//create array
		const board = [];

		// create array with objects
		for (let row = 0; row < width; row++) {
			board[row] = [];
			for (let col = 0; col < height; col++) {
				board[row][col] = { fill: 0, state: 'hidden' };
			}
		}

		// drawing bombs
		for (let bomb = 0; bomb <= numBombs; bomb +=1 ) {
			do {
				const row = Math.floor(Math.random() * board.length);
				const col = Math.floor(Math.random() * board[row].length);
				board[row][col].fill = 9;
			} while (board.find(index => index.fill === 9));
		}

		// assign numbers
		for (let row = 0; row < board.length; row++) {
			for (let col = 0; col < board[row].length; col++) {

				let numberOfNeighbourBombs = 0;
				if ( board[row][col].fill === 9) continue; // ignore elements with bombs

				for (let check = 0; check < checkId.length; check += 1) {

					let dir = checkId[check];

					if (isInBounds(board, row + dir.row, col + dir.col)) {
						if ( board[row + dir.row][col + dir.col].fill === 9) {
							numberOfNeighbourBombs += 1;
						}
					}

					board[row][col].fill = numberOfNeighbourBombs;

				}
			}
		}

		return board;
	}

	//let board = createBoard(rows, columns, numBombs);
	//console.table(board);

	//console.log(JSON.stringify(board));

	let boardTest = [[{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":5,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}]];

	let userClickedOnBoard = boardCheck(boardTest, 6, 9);
	console.table(userClickedOnBoard);

	draw(boardTest);
};



