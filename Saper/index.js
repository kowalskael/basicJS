document.getElementById("play").style.display = "none";

document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // saper menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER
	let time = document.getElementById("timer"); // refer to timer element



	let rows = document.getElementById("width").value;
	let columns = document.getElementById("height").value;
	let numBombs = document.getElementById("bombNums").value;

	// array for checking neighbours
	let checkId = [
		{row: -1, col: -1}, {row: -1, col: 0}, {row: -1, col: +1},
		{row: 0, col: -1}, {row: 0, col: +1},
		{row: +1, col: -1}, {row: +1, col: 0}, {row: +1, col: +1}];

	// start
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

	//let board = createBoard(rows, columns, numBombs);
	//console.table(board);

	//console.log(JSON.stringify(board));

	//play
	function boardCheck(board, row, col) {

			// click on empty
			if (board[row][col].fill === 0 && board[row][col].state === 'hidden' ) {

				board[row][col].state = 'revealed'; // change state on clicked element

				for (let check = 0; check < checkId.length; check += 1) { // check neighbours

					let dir = checkId[check];

					if (row + dir.row >= 0 && row + dir.row < board.length && col + dir.col >= 0 && col + dir.col < board.length) { // pass valid index

						if (0 < board[row + dir.row][col + dir.col].fill && board[row + dir.row][col + dir.col].fill <= 8 && board[row][col].state === 'hidden') // if neighbours are numbers, reveal them
							board[row + dir.row][col + dir.col].state = 'revealed';

						if (board[row + dir.row][col + dir.col].fill === 0 && board[row][col].state === 'hidden') // if neighbour is 0, reveal it and start userClicks() on it
							board[row + dir.row][col + dir.col].state = 'revealed';
						boardCheck(board, row + dir.row, col + dir.col)

					}
				}
			}

			// click on numbers
			if (board[row][col].fill > 0 && board[row][col].fill <= 8 && board[row][col].state === 'hidden') {
				board[row][col].state = 'revealed';
			}

			// click on bomb
			if (board[row][col].fill === 9) {
				for (let rows = 0; rows < board.length; rows++) {
					for (let cols = 0; cols < board[rows].length; cols++) {
						board[rows][cols].state = 'revealed'; // reveal all elements of board
						if (board[rows][cols].fill === 9) {
							board[rows][cols].state = 'revealed' && 'bomb'; // change color
						}
						if (board[rows][cols].fill > 0 && board[rows][cols].fill <= 8) {
							board[rows][cols].state = 'revealed' && 'number'; // change color
						}
					}
				}

			}

		return board;
	}

	let boardTest = [[{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"}],[{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":5,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":3,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":3,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":2,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"}],[{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":9,"state":"hidden"},{"fill":2,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":0,"state":"hidden"},{"fill":1,"state":"hidden"},{"fill":1,"state":"hidden"}]];

	let userClickedOnBoard = boardCheck(boardTest, 6, 9);
	console.table(userClickedOnBoard);

	function draw(board) {

		let boardContainer = document.getElementById('board');

		for (let i = 0; i < board.length; i++) {
			let rows = document.createElement("div");
			boardContainer.append(rows);
			for (let j = 0; j < board[i].length; j++) {
				let cols = document.createElement("div");
				rows.append(cols);
				cols.classList.add(board[i][j].state);
				if (board[i][j].fill > 0 && board[i][j].fill < 9 ) {
					if (board[i][j].state === 'revealed' || board[i][j].state === 'number') {
						cols.innerHTML = board[i][j].fill;
					}
				}
				if (board[i][j].fill === 9) {
					if (board[i][j].state === 'bomb') {
						cols.innerHTML = 'B';
					}

				}
			}
		}
	}

	draw(boardTest);


	// szkic kolejnych funkcji
	function flagBoard(board, row, col) {

		// click on every element that is hidden
		if(board[row][col].state === 'hidden') {
			board[row][col].state = 'flagged';
		}

		if(board[row][col].state === 'flagged') {
			board[row][col].state = 'hidden';
		}

	}

	function revealWithFlags(board, row, col) {

		// click on element with number
		if (board[row][col].fill > 0 && board[row][col].fill <= 8 && board[row][col].state === 'revealed') {

			for (let check = 0; check < checkId.length; check += 1) { // check neighbours

				let dir = checkId[check];

				if (row + dir.row >= 0 && row + dir.row < board.length && col + dir.col >= 0 && col + dir.col < board.length) { // pass valid index

					if (board[row + dir.row][col + dir.col].fill === 9 && board[row + dir.row][col + dir.col].state === 'flagged') {
						// reveal the rest of neighbours, recursion
					}

					if (board[row + dir.row][col + dir.col].fill === 9 && board[row + dir.row][col + dir.col].state === 'hidden') {
						// game over
					}
				}

			}
		}
	}

};



