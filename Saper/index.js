document.getElementById("play").style.display = "none";
let objArr = [];
document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // saper menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER

	// start
	let rows = document.getElementById("width").value;
	let columns = document.getElementById("height").value;
	let numBombs = document.getElementById("bombNums").value;

	function createBoard(width, height, numBombs) {

		//create array
		let board = [];
		for (let row = 0; row < width; row++) { // create array with objects
			board[row] = [];
			for (let col = 0; col < height; col++) {
				board[row][col] = { fill: 0, state: 'hidden' };
			}
		}

		// drawing bombs
		for (let bomb = 0; bomb <= numBombs; bomb +=1 ) {
			do {
				let row = Math.floor(Math.random() * board.length);
				let col = Math.floor(Math.random() * board[row].length);
				board[row][col].fill = 9;
			} while (board.find(index => index.fill === 9));
		}

		let checkId = [ // array for checking id
			{row: -1, col: -1}, {row: -1, col: 0}, {row: -1, col: +1},
			{row: 0, col: -1}, {row: 0, col: +1},
			{row: +1, col: -1}, {row: +1, col: 0}, {row: +1, col: +1}];

		// assign numbers
		for (let row = 0; row < board.length; row++) {
			for (let col = 0; col < board[row].length; col++) {

				let numberOfNeighbourBombs = 0;
				if ( board[row][col].fill === 9) continue;

				for (let check = 0; check < checkId.length; check += 1) {

					let dir = checkId[check];

					if (row + dir.row >= 0 && row + dir.row < board.length && col + dir.col >= 0 && col + dir.col < board.length) {

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

	let board = createBoard(rows, columns, numBombs);
	console.table(board);
};



