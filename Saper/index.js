document.getElementById("play").style.display = "none";
let objArr = [];
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
			if(minutes >= 60) {
				// end of game
			}
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
	 // two-dimensional array
	let divContainer = document.getElementById("board"); // variable returning html element

	for (let i = 0; i < rows; i++) { // create array with objects
		objArr[i] = [];
		let row = document.createElement('div');
		divContainer.appendChild(row);
		for (let j = 0; j < columns; j++) {
			let column = document.createElement('div');
			row.appendChild(column);
			column.classList.add('hidden'); // every element with class hidden for start
			column.classList.add('square');
			objArr[i][j] = { fill: 0, state: 'hidden', element: column };
		}
	}

	// drawing bombs, after 1st click
	function drawBombs(array, i, j) { // do drawing for first click, then increase clickCount and 'block' function
		let clickCount = 0;
		return function(e) {
			if (clickCount === 0) {

				if ( array[i][j].element === e.target) {
					array[i][j].state = 'revealed';
				}

				let loopCount = 0;

				do {
					let i = Math.floor(Math.random() * array.length);
					let j = Math.floor(Math.random() * array.length);
					array[i][j].fill = 9;
					loopCount++;
				} while ( loopCount < bombNums );
			}

			clickCount++;
		}
	}

	// objects with numbers
	function flagNumbers(array, i, j) {

		let checkId = [ // array for checking id
			{x: -1, y: -1}, {x: -1, y: 0}, {x: -1, y: +1},
			{x: 0, y: -1}, {x: 0, y: +1},
			{x: +1, y: -1}, {x: +1, y: 0}, {x: +1, y: +1}];

		for (let a = 0; a < checkId.length; a++) { // dla każdego elementu z checkId

			let nextIdx = i + checkId[a].x; // zmienna określająca index do sprawdzenia
			let nextIdy = j + checkId[a].y; // zmienna określająca index do sprawdzenia

			if (nextIdx >= 0 && nextIdx < array.length && nextIdy >= 0 && nextIdy < array[i].length) { // pola do sprawdzenia, występujące w tabicy

				let bombCount = 0;
				// sprawdzam ile elementów sąsiadujących spełnia warunek array.fill === 9
				// ilość tych elementów przypisuję do sprawdzanego elementu array[i][j].fill

				do {
					if (array[nextIdx][nextIdy].fill === 9) {
						return bombCount++;
					}
					checkId.pop();
				} while (checkId.length > 0);

				array[i][j].fill = bombCount;

			}

		}


	}

	for (let i = 0; i < objArr.length; i++) {
		for (let j = 0; j < objArr[i].length; j++) {
			divContainer.onclick = drawBombs(objArr, i, j);
			flagNumbers(objArr, i, j);
		}
	}

	console.log(objArr);

	// flagging squares
	function flagObject() {
		// if object with state: 'hidden' is clicked with right button of the mouse
		// change object state: 'flagged'
		// if object with state: 'flagged' is clicked with left button of the mouse
		// change object state: 'hidden'

	}

	// revealing objects
	function revealObject() {
		// if object.state: 'hidden' onclick change state: 'revealed'
		//
	}

	/*// change class on the every div that is clicked
	for(let i = 0; i < squareDivs.length; i++) {
		squareDivs[i].onclick = function() {
			// change fill or state of object
		};
		squareDivs[i].ondblclick = function() {
			// change fill or state of object
		}
	}
	*/
};



