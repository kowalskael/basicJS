document.getElementById("play").style.display = "none";

document.getElementById("submit").onclick = function() {

	document.getElementById("start").style.display = "none"; // saper menu hidden
	document.getElementById("play").style.display = "block"; // show play area

	// TIMER
	let time = document.getElementById("timer"); // refer to timer element

	let seconds = 0; let minutes = 0;

	function add() { // update numbers in timer
		seconds++;
		if(seconds >= 60) {
			minutes++;
			seconds = 0;
		}

		time.textContent = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00')
			+ ':' + (seconds > 9 ? seconds : '0' + seconds);

		timer();
	}

	function timer() {
	 setTimeout(add, 1000); // call function every 1s
	}

	timer();

	// PLAY
	let rows = document.getElementById("width").value;
	let columns = document.getElementById("height").value;
	let bombNums = document.getElementById("bombNums").value;

	// create Array with objects
	let objArr = []; // two-dimensional array
	const square = { fill: 0, state: 'hidden' }; // object with parameters about Saper squares

	for (let i = 0; i < rows; i++) { // create array with objects
		objArr[i] = [];
		for (let j = 0; j < columns; j++) {
			objArr[i][j] = square;
		}
	}

	// create Array with div's
	let divContainer = document.getElementById("board"); // variable returning html element
	let divArr = [];

	for (let i = 0; i < rows; i++) { // create array with div's
		divArr[i] = [];
		let row = document.createElement('div');
		divContainer.appendChild(row);
		for (let j = 0; j < columns; j++) {
			let column = document.createElement('div');
			row.appendChild(column);
			column.setAttribute("class", 'hidden'); // every element with class hidden for start
			divArr[i][j] = document.getElementsByClassName('hidden');
		}
	}
	
	console.log(divContainer.childNodes);
	console.log(objArr);
	console.log(divArr);
};



