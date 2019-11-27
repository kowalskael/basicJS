document.getElementById("play").style.display = "none";

document.getElementById("submit").onclick = function() {
	document.getElementById("start").style.display = "none"; // saper menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	//timer
	let time = document.getElementById("timer"); // refer to timer element

	let seconds = 0; let minutes = 0;

	function add() { // update numbers in timer
		seconds++;
		if(seconds >= 60) {
			minutes++;
			seconds = 0;
		}

		time.textContent = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);

		timer();
	}

	function timer() {
	 setTimeout(add, 1000);
	}

	timer();

	// play area
	let rows = document.getElementById("width").value;
	let columns = document.getElementById("height").value;
	let bombNums = document.getElementById("bombNums").value;

	let areas = [];

	const square = { fill: 0, state: 'hidden' };

	let board = document.getElementById("board");

	for (let i = 0; i < rows; i++) {
		areas[i] = [];
		let row = document.createElement('div');
		board.appendChild(row);
		row.setAttribute("id", "row");
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			areas[i][j] = { fill: 0, state: 'hidden' };
		}
	}


	console.log(board);
	console.log(areas);
};



